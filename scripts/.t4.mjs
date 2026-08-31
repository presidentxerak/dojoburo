import { chromium } from 'playwright'
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'})
for (const [w,h,tag] of [[390,780,'phone'],[537,741,'narrow'],[1280,900,'desk']]) {
  const p=await b.newPage({viewport:{width:w,height:h}})
  await p.goto('http://localhost:4173/',{waitUntil:'networkidle'}); await p.waitForTimeout(1800)
  await p.locator('.lp-hero-how').click(); await p.waitForTimeout(1800)
  const n=await p.locator('.tutfs-body .tut-dot').count()
  let bad=0
  for (let i=0;i<n;i++){
    await p.locator('.tutfs-body .tut-dot').nth(i).click(); await p.waitForTimeout(1900)
    const o = await p.evaluate(() => {
      const st=document.querySelector('.tut-stage'); if(!st) return ['no stage']
      const sb=st.getBoundingClientRect(); const out=[]
      for (const el of st.querySelectorAll('*')) {
        const r=el.getBoundingClientRect(); if(r.width<3||r.height<3) continue
        if (r.top<sb.top-2||r.bottom>sb.bottom+2||r.left<sb.left-2||r.right>sb.right+2)
          out.push(`${(el.className+'').slice(0,24)} h=${Math.round(r.height)} stage=${Math.round(sb.height)}`)
      }
      return out
    })
    if (o.length) { bad++; console.log(`${tag} beat ${i}:`, o[0]) }
  }
  if (!bad) console.log(`${tag}: all ${n} beats fit`)
  await p.close()
}
await b.close()
