import { Loginpage } from "./pages/loginpage";
import { test,expect } from "@playwright/test";
test("new",async({page})=>{
    const loginpage= new Loginpage(page)
    await page.goto("https://www.facebook.com/r.php?entry_point=login")
    await loginpage.firstname.fill("testname")
    await page.locator('[name="lastname"]')
    await page.locator('[name="birthday_day"]')
    await page.locator('[name="sex"][value="2"]')

})