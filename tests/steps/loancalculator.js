import { Loancalcultor } from "../pages/loancalculator";
import { chromium } from "@playwright/test";
import { createBdd } from 'playwright-bdd';
const { Given, When, Then} = createBdd();

Given("singleAcc", async({page})=>{

    const singleacc = new Loancalcultor(page)
    await singleacc.sitelaunch("https://www.anz.com.au/personal/home-loans/calculators-tools/borrowing-power-calculator/")
    await singleacc.single1()    
    //await singleacc.Numberofdependents()
    //await singleacc.Property_you_would_like_to_buy()

})