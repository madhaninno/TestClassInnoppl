export class Bookinglocators{

   constructor(page){

    this.page = page
    //this.close = page.getByRole["('button', { name: 'Dismiss sign in information.' })"]
    this.locationdropdown = page.locator('[data-testid="destination-container"]')
    


   }
    
   async homepage(url,loc){
    await this.page.goto(url)
    //await this.close.click()
    await this.locationdropdown.fill(loc)
    //await this.keyboard.press('Enter')
   }




}