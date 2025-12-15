import { expect } from "@playwright/test"

export class Loancalcultor{

constructor(page){
    //Your details single:
    this.page = page
    this.single = page.getByText('Single')
    this.Numberofdependents = page.locator('[title="Number of dependants"]')
    this.Property_you_would_like_to_buy = page.getByText('Home to live in ')
     //Your details joint:
     this.joint = page.getByText('joint')


}

  async sitelaunch(url){
    await this.page.goto(url)
    await this.single.waitFor({state:'visible'})
    await this.page.waitForLoadState('load')
  }
   async single1(){
   await this.single.click()
   await this.Numberofdependents.selectOption('3')
   await this.Property_you_would_like_to_buy.click()
   await this.page.waitForTimeout(10000)
   await this.expect(this.single).toBe
   }


}