import { Frameslocator } from "../pages/frameslocator";
const { Given, When, Then} = createBdd();
import { chromium } from "@playwright/test";
import { createBdd } from "playwright-bdd";


Given("framestab", async({page})=>{
    const fram = new Frameslocator(page)
    await fram.anzlaunch("https://www.anz.com.au")
    let page2 = await fram.face()
    const frame1 = new Frameslocator(page2)
    await frame1.anzlaunch("https://www.anz.com.au")
    await page.bringToFront()
    let page3 = await fram.linked()
    await page.bringToFront()
    let page4 = await fram.tube()
    await page.pause()
})