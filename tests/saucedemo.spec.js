import { Saucedemolocator } from "./pages/saucedemolocators";
import { test,chromium } from "@playwright/test";
import { expect } from "@playwright/test";

test("new", async()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    const Saucedemolocators = new Saucedemolocator(page)
    await Saucedemolocators.sitelaunch("https://www.saucedemo.com/")
    await Saucedemolocators.loginpage("standard_user","secret_sauce")
    await Saucedemolocators.categoryPage()
    await Saucedemolocators.minicart()
    await Saucedemolocators.checkout("test","name","12345")
    await page.pause()
    await Saucedemolocators.successpage()
   
    }
)