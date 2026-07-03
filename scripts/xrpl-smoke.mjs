// End-to-end smoke test of the real XRPL flow the app relies on.
import { Client, Wallet, xrpToDrops, convertStringToHex } from 'xrpl'

const WSS = 'wss://s.altnet.rippletest.net:51233'
const client = new Client(WSS, { connectionTimeout: 20000 })

async function main() {
  console.log('connecting', WSS)
  await client.connect()
  console.log('connected. server:', (await client.request({ command: 'server_info' })).result.info.build_version)

  console.log('funding wallet A from faucet…')
  const a = (await client.fundWallet()).wallet
  console.log('A =', a.classicAddress)
  const b = (await client.fundWallet()).wallet
  console.log('B =', b.classicAddress)

  const tx = {
    TransactionType: 'Payment',
    Account: a.classicAddress,
    Destination: b.classicAddress,
    Amount: xrpToDrops('1'),
    Memos: [{ Memo: { MemoType: convertStringToHex('x402'), MemoData: convertStringToHex(JSON.stringify({ protocol: 'x402', skill: 'smoke' })) } }],
  }
  const prepared = await client.autofill(tx)
  const signed = a.sign(prepared)
  const res = await client.submitAndWait(signed.tx_blob)
  console.log('payment result:', res.result.meta.TransactionResult, 'hash:', res.result.hash)

  const hist = await client.request({ command: 'account_tx', account: b.classicAddress, limit: 5 })
  console.log('B history tx count:', hist.result.transactions.length)

  await client.disconnect()
  console.log('OK ✅')
}

main().catch((e) => {
  console.error('FAIL ❌', e?.message ?? e)
  process.exit(1)
})
