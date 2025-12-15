import { expect } from "@playwright/test"
export class Frameslocator{

   constructor(page){
    this.page = page
    this.facebook = page.locator('[id="Facebook"]')
    this.linkedin = page.locator('[id="LinkedIn"]')
    this.youtube = page.locator('[id="youtube-Fill-1"]')
   }   


   async anzlaunch(url){
    await this.page.goto(url)

   }

   async face(){
    const newpagepromise = this.page.waitForEvent('popup')
    await this.facebook.click()
    const page2 = await newpagepromise  
    return page2
   }
async linked(){
    const newpagepromise2 = this.page.waitForEvent('popup')
    await this.linkedin.click()
    const page3 = await newpagepromise2
    return page3
}
async tube(){
     const newpagepromise3 = this.page.waitForEvent('popup')
    await this.youtube.click()
     const page4 = await newpagepromise3
     return page4
}

}
