import { Loancalcultor } from "./pages/loancalculator";
import { test} from "playwright-bdd";
import { expect } from "@playwright/test";
import { chromium } from "@playwright/test";

test("singleAccount", async({page})=>{

    const singleacc = new Loancalcultor(page)
    await singleacc.sitelaunch("https://www.anz.com.au/personal/home-loans/calculators-tools/borrowing-power-calculator/")
    await singleacc.single()    
    await singleacc.Numberofdependents()
    await singleacc.Property_you_would_like_to_buy()
    await page.waitForURL('')
    await page.waitForTimeout(1000)
    
})