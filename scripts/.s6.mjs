import { chromium } from 'playwright'
const D='/tmp/claude-0/-home-user-dojoburo/8cfcc82d-45a3-56f8-883b-94644fa8ec4b/scratchpad'
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'})
const p=await b.newPage({viewport:{width:1400,height:950}})
await p.goto('http://localhost:4173/#app',{waitUntil:'networkidle'}); await p.waitForTimeout(1400)
await p.fill('.cc-input, input','KASSIOPEUS').catch(()=>{})
await p.locator('.cc-go, button',{hasText:'Create your company'}).first().click(); await p.waitForTimeout(1500)
for (const i of [0,1,2]) await p.locator('.ct-grid .tcard').nth(i).click()
await p.locator('.ct-go').click(); await p.waitForTimeout(3500)
// inside the company · portrait team cards + the "+" card
await p.locator('.tb-menu-btn').click(); await p.waitForTimeout(300)
await p.locator('.tb-menu-item',{hasText:'My companies'}).click(); await p.waitForTimeout(1000)
await p.locator('.cocard-face').first().click(); await p.waitForTimeout(1200)
await p.screenshot({path:D+'/w1-teams.png'})
// the chooser · hireable first
await p.locator('.cocard-new').click(); await p.waitForTimeout(1400)
await p.screenshot({path:D+'/w2-choose.png'})
console.log('first 6 cards owned?', await p.locator('.ct-grid .tcard').evaluateAll(els=>els.slice(0,6).map(e=>e.classList.contains('owned'))))
await p.locator('.ct-back').click(); await p.waitForTimeout(1000)
// the companies grid with the + card
await p.locator('.ph-back').click(); await p.waitForTimeout(1000)
await p.screenshot({path:D+'/w3-companies.png'})
await b.close()
