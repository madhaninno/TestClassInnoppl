import { expect } from "@playwright/test"
export class Saucedemolocator{

    constructor(page){

        this.page = page
        this.username = page.locator('[id="user-name"]')
        this.password = page.locator('[id="password"]')
        this.loginbutton = page.locator('[id="login-button"]')
        this.productname = page.locator('[id="item_1_title_link"]')
        this.addtocart = page.locator('[id="add-to-cart"]')
        this.minicarticon = page.locator('[id="shopping_cart_container"]')
        this.addedproductname = page.locator('[id="item_1_title_link"]')
        this.checkoutpage = page.locator('[id="checkout"]')
        this.checkoutfirstname = page.locator('[id="first-name"]')
        this.checkoutlastname = page.locator('[id="last-name"]')
        this.checkoutzipcode = page.locator('[id="postal-code"]')
        this.checkoutcontinue = page.locator('[id="continue"]')
        this.finish = page.locator('[id="finish"]')
        this.thankyou = page.getByText('Thank you for your order!')

    }
    async sitelaunch(url){
        await this.page.goto(url)
    }
        
    async loginpage(name,pwd){
        await this.username.fill(name)
        await this.password.fill(pwd)
        await this.loginbutton.click()
    }
  
    async categoryPage(){
        await this.productname.click()
        await this.addtocart.click()
    }
    async minicart(){
        await this.minicarticon.click()
        await this.checkoutpage.click()
    
}
     async checkout(name,name1,code){
        await this.checkoutfirstname.fill(name)
        await this.checkoutlastname.fill(name1)
        await this.checkoutzipcode.fill(code)
        await this.checkoutcontinue.click()
        await this.finish.click()
        await this.thankyou.click()

     }

     async successpage(page){

        //const thankyou = this.page.getByText('Thank you for your order!')
        await expect(this.thankyou).toHaveText('Thank you for your order!')
    
     }
}