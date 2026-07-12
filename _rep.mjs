import { chromium } from 'playwright'
const dir = '/tmp/claude-0/-home-user-dojoburo/8cfcc82d-45a3-56f8-883b-94644fa8ec4b/scratchpad'
const userDataDir = dir + '/pw-profile'
const ctx = await chromium.launchPersistentContext(userDataDir, { executablePath: '/opt/pw-browsers/chromium', viewport:{width:900,height:1000} })
await ctx.addInitScript(() => {
  try {
    localStorage.setItem('dojoburo.onboarded.v1','1')
    const acc = { id:'adm1', name:'Xerak', handle:'', email:'presidentxerak@gmail.com', provider:'privy', currency:'EUR', avatarSkinId:'', privyDid:'did:privy:test' }
    localStorage.setItem('dojoburo.workshop.v1', JSON.stringify({ account: acc, dojos:[{id:'d1',name:'Sakura Ramen',template:'dojo',agents:[]}], activeDojoId:'d1' }))
  } catch {}
})
const p = await ctx.newPage()
p.on('console', m => console.log('['+m.type()+']', m.text()))
p.on('pageerror', e => console.log('PAGEERROR:', e.message))
// first load → registers SW
await p.goto('http://localhost:4807/#app', { waitUntil:'networkidle' }); await p.waitForTimeout(2500)
// second load → SW controls the page now
await p.reload({ waitUntil:'networkidle' }); await p.waitForTimeout(2500)
await p.locator('.mission-card', { hasText: 'Créer une marque' }).first().click()
await p.waitForTimeout(2500)
console.log('brand controls present:', await p.locator('.brand-idrow').count(), '| modhost-loading:', await p.locator('.modhost-loading').count(), '| ad-body children:', await p.locator('.modhost .ad-body').count())
await p.screenshot({ path: dir + '/repro.png' })
await ctx.close(); console.log('done')
