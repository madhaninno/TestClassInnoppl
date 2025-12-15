export class Alertsnewprog{

    constructor(page){
        this.page = page
        this.alerto= page.locator('[id="alertButton"]')
        this.timeralert = page.locator('[id="timerAlertButton"]')
        this.confirmalert = page.locator('[id="confirmButton"]')
        this.promptalert = page.locator('[id="promtButton"]')
        this.jsalert = page.getByText('Click for JS Alert')
        this.jsconfirm = page.getByText('Click for JS Confirm')
        this.jsprompt= page.getByText('Click for JS Prompt')
    }
    async alert(){

        this.page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await this.alerto.click()


    }

    async alerttimer(){
        await this.page.waitForTimeout(4000)
        this.page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await this.timeralert.click()


    }

    async alertconfirm(action = 'accept'){
        await this.page.waitForTimeout(4000)
        this.page.once('dialog', async(dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    if(action==='accept'){
        await dialog.accept()

    }
    else{
        await dialog.dismiss()
    }
  });
  await this.confirmalert.click()


    }

 async alertnew(){
        await this.page.waitForTimeout(4000)
        this.page.once('dialog', async(dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept()
  });
  await this.alerto.click()


    }

     async alertpromptmsg(action = 'accept', msg){
        await this.page.waitForTimeout(4000)
        this.page.once('dialog', async(dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    if(action==='accept'){
        await dialog.accept(msg)
        

    }
    else{
        await dialog.dismiss(msg)
    }
  });
  await this.promptalert.click()


    }

          async alertJs(){

    this.page.once('dialog', async(dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss()
    
  });
  await this.jsalert.click()
 }

    }

