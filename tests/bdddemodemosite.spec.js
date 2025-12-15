import { test,expect,chromium } from "@playwright/test";
import {Siteone} from "./pages/siteone";
import { Droppable } from "./pages/Droppable";
import { UploadDownload } from "./pages/UploadDownload";
import { Waitstatement } from "./pages/waitstatement";
import { Alerts, Alertsnewprog } from "./pages/alertsnewprog";

test.describe('practicetest',()=>{


test("add text field", async()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    const Demoqa = new Siteone(page)
    await Demoqa.launchUrl("https://demoqa.com/automation-practice-form")
    await Demoqa.addText("Test", "test@mail.com")
    


})

test ("drag&drop", async({page})=>{
    const droppable = new Droppable(page)
    const siteone = new Siteone(page)
    await siteone.launchUrl("https://demoqa.com/droppable")
    await droppable.drag()
    await page.pause()
    
})


test("TestUpload", async({page})=>{
    const siteone = new Siteone(page)
    const uploadDownload = new UploadDownload(page)
    await siteone.launchUrl("https://demoqa.com/upload-download")
    await uploadDownload.uploadfile("D:/Visual code/test/tests/pages/uploadDownload.js")
    await uploadDownload.downloadfile("test.js")
    await page.pause()


} )

test("Spinner", async({page})=>{
    const siteone = new Siteone(page)
    const waitnew = new Waitstatement(page)
    await siteone.launchUrl("https://demoqa.com/progress-bar")
    await waitnew.progresbar()
    await waitnew.stopbar(50)
    await page.pause()

})


test("alerts", async({page})=>{
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
    await page.waitForLoadState('load')




}
)
}
 )
