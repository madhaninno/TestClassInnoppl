export class Waitstatement{

constructor(page){
    this.page = page;
    this.startbutton = page.locator('[id="startStopButton"]')
    this.resetbutton = page.locator('[id="resetButton"]')
    this.progressbar = page.locator('[role="progressbar"]')


}

async progresbar(){
    await this.startbutton.click()
    await this.page.locator('[aria-valuenow="100"]').waitFor({state:'visible'})
    await this.resetbutton.click()



}


async stopbar(value){
    await this.startbutton.click()
    let initialvalue = 0
    while(initialvalue < value){
          const valuenow = await this.progressbar.getAttribute('aria-valuenow')
          initialvalue = parseInt(valuenow,10)
          if(initialvalue>=value){
            await this.startbutton.click()
            break;
          }
    }
    
}
}

