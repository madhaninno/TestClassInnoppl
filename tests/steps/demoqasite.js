import { createBdd } from 'playwright-bdd';
const { Given, When, Then} = createBdd();
import { Siteone } from '../pages/siteone';
import { Droppable } from '../pages/droppable';
import { UploadDownload } from "../pages/uploadDownload";
import { Waitstatement } from "../pages/waitstatement";
import { Alerts, Alertsnewprog } from "../pages/alertsnewprog";
import { chromium } from '@playwright/test';
import fs from 'fs'
import { data, getdata } from '../testdata/testfile';
const datasetname = process.env.DATA|| 'data1';
const users = getdata(datasetname)

Given("add text field", async()=>{
    //const datasetname 

    //const data = JSON.parse(fs.readFileSync('tests/testdata/testfile.json'))
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    const Demoqa = new Siteone(page)
    //for(const users of data){
        await Demoqa.launchUrl("https://demoqa.com/automation-practice-form")
        await Demoqa.addText(users.name,users.email)
        console.log(users.name)
        console.log(users.email)
    //}
    
    


})

When("drag&drop", async({page})=>{
    const droppable = new Droppable(page)
    const siteone = new Siteone(page)
    await siteone.launchUrl("https://demoqa.com/droppable")
    await droppable.drag()
    await page.pause()
    
})


Then("TestUpload", async({page})=>{
    const siteone = new Siteone(page)
    const uploadDownload = new UploadDownload(page)
    await siteone.launchUrl("https://demoqa.com/upload-download")
    await uploadDownload.uploadfile("tests/steps/demoqasite.js")
    await uploadDownload.downloadfile("test.js")
    await page.pause()


} )

Given("Spinner", async({page})=>{
    const siteone = new Siteone(page)
    const waitnew = new Waitstatement(page)
    await siteone.launchUrl("https://demoqa.com/progress-bar")
    await waitnew.progresbar()
    await waitnew.stopbar(50)
    await page.pause()

})


Given("alerts", async({page})=>{
    const siteone = new Siteone(page)
    //await siteone.launchUrl("https://demoqa.com/alerts")
    await siteone.launchUrl("https://the-internet.herokuapp.com/javascript_alerts")
    
    const Alertsone = new Alertsnewprog(page)
    await page.pause()
    //await Alertsone.alert()
    //await Alertsone.alerttimer()
    //await Alertsone.alertconfirm('dismiss')
   // await Alertsone.alertnew()
      //await Alertsone.alertpromptmsg('accept', 'test message')
      await Alertsone.alertJs()
    await page.pause()




}
)

