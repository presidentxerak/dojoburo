// The free-provider MCP bridge, tested for real.
//
// api/_lib/mcp.ts + api/_lib/llm.ts are what let a teammate ACT inside a
// connected app without a Claude key: they speak MCP to the app, hand the tools
// to Gemini/Groq/Cerebras/OpenRouter as plain function declarations, and run the
// call loop. None of that can be checked by reading it — a schema Gemini rejects
// or a tool result the model never sees both look fine in a diff and fail
// silently in production, on the user's own Notion.
//
// So this stands up a real MCP server and a real (mock) provider over HTTP and
// runs the actual modules against them: the handshake, the session id, the two
// transports (JSON and SSE), the schema clean-up, the tool loop for both request
// shapes, and the failure paths — a dead model, a broken app, a runaway loop.
//
// Run: node scripts/test-llm-bridge.mjs   (part of npm run build)
import { createServer } from 'node:http'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { execFileSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'

let bad = 0
const ok = (cond, msg) => { console.log((cond ? 'ok    ' : 'FAIL  ') + msg); if (!cond) bad++ }

// ---- the mock world ---------------------------------------------------------
const seen = { openai: [], gemini: [], mcp: [] }
const SESSION = 'sess-42'

const TOOL_SCHEMA = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  type: 'object',
  additionalProperties: false,
  properties: {
    title: { type: 'string', description: 'Page title' },
    parent: { type: ['string', 'null'] },
    tags: { type: 'array', items: { type: 'string' } },
    visibility: { type: 'string', enum: ['private', 'public'] },
    meta: { type: 'object', properties: { deep: { type: 'string' } } },
  },
  required: ['title', 'ghost'],
}
// One real tool plus enough filler to prove the per-server cap bites.
const TOOLS = [
  { name: 'create_page', description: 'Create a page', inputSchema: TOOL_SCHEMA },
  ...Array.from({ length: 20 }, (_, i) => ({ name: `filler_${i}`, description: 'x', inputSchema: { type: 'object', properties: {} } })),
]

function mcpReply(msg) {
  if (msg.method === 'initialize') {
    return { jsonrpc: '2.0', id: msg.id, result: { protocolVersion: '2025-06-18', capabilities: { tools: {} }, serverInfo: { name: 'mock', version: '1' } } }
  }
  if (msg.method === 'tools/list') return { jsonrpc: '2.0', id: msg.id, result: { tools: TOOLS } }
  if (msg.method === 'tools/call') {
    if (msg.params?.name === 'create_page') {
      return { jsonrpc: '2.0', id: msg.id, result: { content: [{ type: 'text', text: `created "${msg.params?.arguments?.title}"` }] } }
    }
    return { jsonrpc: '2.0', id: msg.id, result: { isError: true, content: [{ type: 'text', text: 'no such tool' }] } }
  }
  return { jsonrpc: '2.0', id: msg.id, error: { code: -32601, message: 'method not found' } }
}

const server = createServer(async (req, res) => {
  const body = await new Promise((resolve) => { let d = ''; req.on('data', (c) => { d += c }); req.on('end', () => resolve(d)) })
  const url = req.url || ''
  const json = body ? JSON.parse(body) : null

  // ---- MCP servers ----------------------------------------------------------
  if (url.startsWith('/mcp/')) {
    seen.mcp.push({ url, method: json?.method, session: req.headers['mcp-session-id'], auth: req.headers.authorization, accept: req.headers.accept })
    if (url === '/mcp/dead') { res.writeHead(500).end('boom'); return }
    if (!json?.id) { res.writeHead(202).end(); return } // a notification
    const out = mcpReply(json)
    if (url === '/mcp/sse') {
      res.writeHead(200, { 'content-type': 'text/event-stream', 'mcp-session-id': SESSION })
      // a progress notification first, then the answer · the client must take
      // the message that actually carries a result
      res.end(`event: message\ndata: ${JSON.stringify({ jsonrpc: '2.0', method: 'notifications/progress', params: {} })}\n\nevent: message\ndata: ${JSON.stringify(out)}\n\n`)
      return
    }
    res.writeHead(200, { 'content-type': 'application/json', 'mcp-session-id': SESSION })
    res.end(JSON.stringify(out))
    return
  }

  // ---- OpenAI-compatible provider ------------------------------------------
  if (url === '/openai/v1/chat/completions') {
    seen.openai.push(json)
    if (json.model === 'dead-model') { res.writeHead(404).end('{"error":"decommissioned"}'); return }
    const hasResult = json.messages.some((m) => m.role === 'tool')
    const reply = hasResult
      ? { message: { role: 'assistant', content: 'Filed it. ' + json.messages.filter((m) => m.role === 'tool').map((m) => m.content).join(' | ') } }
      : json.tools
        ? { message: { role: 'assistant', content: '', tool_calls: [{ id: 'call_1', type: 'function', function: { name: 'notion__create_page', arguments: '{"title":"Q3 brief"}' } }] } }
        : { message: { role: 'assistant', content: 'plain answer' } }
    res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({ choices: [reply] }))
    return
  }
  // a provider that always asks for another tool call · tests the round ceiling
  if (url.endsWith('/loop/chat/completions')) {
    seen.openai.push(json)
    const body2 = json.tools
      ? { message: { role: 'assistant', content: '', tool_calls: [{ id: 'c', type: 'function', function: { name: 'notion__create_page', arguments: '{"title":"again"}' } }] } }
      : { message: { role: 'assistant', content: 'stopped and wrote it up' } }
    res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({ choices: [body2] }))
    return
  }

  // ---- Gemini ---------------------------------------------------------------
  if (url.includes(':generateContent')) {
    seen.gemini.push({ model: /models\/([^:]+):/.exec(url)?.[1], key: /key=([^&]+)/.exec(url)?.[1], body: json })
    const answered = JSON.stringify(json.contents).includes('functionResponse')
    const parts = answered
      ? [{ text: 'Filed it via Gemini.' }]
      : json.tools
        ? [{ functionCall: { name: 'notion__create_page', args: { title: 'Q3 brief' } } }]
        : [{ text: 'plain answer' }]
    res.writeHead(200, { 'content-type': 'application/json' }).end(JSON.stringify({ candidates: [{ content: { parts } }] }))
    return
  }

  res.writeHead(404).end('nope')
})

await new Promise((r) => server.listen(0, '127.0.0.1', r))
const PORT = server.address().port
const B = `http://127.0.0.1:${PORT}`

// ---- load the real modules --------------------------------------------------
// Transpiled, not re-implemented: the code under test is the code that ships.
const out = mkdtempSync(join(tmpdir(), 'bridge-'))
execFileSync('node_modules/.bin/esbuild', ['api/_lib/llm.ts', 'api/_lib/mcp.ts', `--outdir=${out}`, '--format=esm', '--platform=node', '--log-level=warning'])

process.env.WORK_CASCADE = 'groq'
process.env.GROQ_API_KEY = 'test-groq'
process.env.GROQ_BASE = `${B}/openai/v1`
process.env.GROQ_MODEL = 'dead-model,live-model' // the first is decommissioned
process.env.GEMINI_API_KEY = 'test-gemini'
process.env.GEMINI_BASE = B
process.env.GEMINI_MODEL = 'mock-flash'

const llm = await import(pathToFileURL(join(out, 'llm.js')).href)
const mcp = await import(pathToFileURL(join(out, 'mcp.js')).href)

const notion = { type: 'url', url: `${B}/mcp/json`, name: 'notion', authorization_token: 'tok-abc' }
const sse = { type: 'url', url: `${B}/mcp/sse`, name: 'slack' }
const dead = { type: 'url', url: `${B}/mcp/dead`, name: 'broken' }

// ---- 1 · the MCP client ------------------------------------------------------
const tools = await mcp.listTools([notion])
ok(tools.length === 12, `a chatty app is capped at twelve tools · got ${tools.length}`)
ok(tools[0].name === 'notion__create_page', `tools are namespaced by app · ${tools[0].name}`)
const params = tools[0].parameters
ok(params.type === 'object' && !('$schema' in params) && !('additionalProperties' in params),
  'the schema is reduced to what every provider accepts')
ok(params.properties.parent?.type === 'string', 'a ["string","null"] union collapses to a real type')
ok(params.properties.tags?.items?.type === 'string', 'array items survive')
ok(Array.isArray(params.required) && params.required.join() === 'title',
  `required names only properties that exist · ${JSON.stringify(params.required)}`)

const said = await mcp.callTool([notion], tools, 'notion__create_page', { title: 'Hello' })
ok(said === 'created "Hello"', `a tool call returns the app's own words · ${said}`)
const nope = await mcp.callTool([notion], tools, 'notion__missing', {})
ok(nope.startsWith('error:'), 'an unknown tool answers with an error the model can read, not a throw')
const initCall = seen.mcp.find((c) => c.method === 'initialize')
ok(initCall?.auth === 'Bearer tok-abc', 'the OAuth token is sent as a bearer token')
ok(/text\/event-stream/.test(initCall?.accept || ''), 'both transports are accepted in the handshake')
ok(seen.mcp.some((c) => c.method === 'notifications/initialized'), 'the handshake is completed with initialized')
ok(seen.mcp.some((c) => c.method === 'tools/list' && c.session === SESSION), 'the session id is echoed back on later calls')

mcp.resetSessions()
const sseTools = await mcp.listTools([sse])
ok(sseTools.length === 12 && sseTools[0].name === 'slack__create_page', 'an SSE server is understood too')
ok((await mcp.callTool([sse], sseTools, 'slack__create_page', { title: 'S' })) === 'created "S"',
  'the answer is picked out of the SSE stream, past the progress frame')

mcp.resetSessions()
ok((await mcp.listTools([dead, notion])).length === 12, 'a broken app drops out instead of taking the run down')

// ---- 2 · the OpenAI tool loop -------------------------------------------------
seen.openai.length = 0
mcp.resetSessions()
const r1 = await llm.cascadeToolRun('sys', 'file the brief', 1000, [notion], 3)
ok(!!r1 && /Filed it/.test(r1.text), `the model's answer comes back · ${r1?.text?.slice(0, 40)}`)
ok(r1.model === 'groq:live-model', `a decommissioned model falls through to the next candidate · ${r1?.model}`)
ok(r1.calls.join() === 'notion__create_page', `what was actually called is reported · ${JSON.stringify(r1?.calls)}`)
ok(/created "Q3 brief"/.test(r1.text), 'the tool result reaches the model, not just the tool')
const live = seen.openai.filter((r) => r.model === 'live-model')
ok(live[0]?.tools?.[0]?.function?.name === 'notion__create_page', 'tools travel in the OpenAI shape')
ok(live[1]?.messages?.some((m) => m.role === 'tool' && m.tool_call_id === 'call_1'),
  'the result is sent back on the tool role, keyed to the call')

// a model that never stops asking must still produce an answer
seen.openai.length = 0
process.env.GROQ_BASE = `${B}/loop`
process.env.GROQ_MODEL = 'live-model'
mcp.resetSessions()
const r2 = await llm.cascadeToolRun('sys', 'go', 1000, [notion], 2)
ok(!!r2 && r2.text === 'stopped and wrote it up', `a runaway loop is stopped and still answers · ${r2?.text}`)
ok(r2.calls.length === 2, `the round ceiling is what stopped it · ${r2?.calls.length} calls`)
ok(seen.openai.at(-1)?.tools === undefined, 'the last round withholds the tools, which is what forces the answer')

// ---- 3 · Gemini ----------------------------------------------------------------
process.env.WORK_CASCADE = 'gemini'
seen.gemini.length = 0
mcp.resetSessions()
const r3 = await llm.cascadeToolRun('sys', 'file the brief', 1000, [notion], 3)
ok(!!r3 && r3.text === 'Filed it via Gemini.', `Gemini completes the same work · ${r3?.text}`)
ok(r3.model === 'gemini:mock-flash', `and reports which model did it · ${r3?.model}`)
const g0 = seen.gemini[0]?.body
ok(g0?.tools?.[0]?.functionDeclarations?.[0]?.name === 'notion__create_page', 'tools travel as function declarations')
const g1 = seen.gemini[1]?.body
ok(JSON.stringify(g1?.contents).includes('functionResponse'), 'the result goes back as a functionResponse turn')
ok(g1?.contents?.some((c) => c.role === 'model'), 'the model turn that asked for the call is kept in the history')

// ---- 4 · text-only still works, and nothing configured fails honestly ----------
process.env.WORK_CASCADE = 'groq'
process.env.GROQ_BASE = `${B}/openai/v1`
const plain = await llm.cascadeComplete('sys', 'write it', 500)
ok(plain?.text === 'plain answer', 'a text run carries no tools at all')

process.env.WORK_CASCADE = 'nothing'
ok(llm.freeCascadeConfigured() === false, 'an unconfigured cascade says so')
ok((await llm.cascadeComplete('s', 'u', 100)) === null, 'and returns nothing rather than pretending')

server.close()
console.log(bad ? `\n${bad} FAILED` : '\nALL GREEN · the bridge works end to end')
process.exit(bad ? 1 : 0)
