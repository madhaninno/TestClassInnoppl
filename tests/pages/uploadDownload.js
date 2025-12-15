import path from "path"
export class UploadDownload{

    constructor(page){
        this.page = page
        this.download ='[id="downloadButton"]'
        this.upload = '[id="uploadFile"]'
    }
    
    async uploadfile(path){

         await this.page.setInputFiles(this.upload,path)


    }

async downloadfile(name){

         const [download] = await Promise.all([this.page.waitForEvent('download'), this.page.locator(this.download).click()])
         const downloadpath = path.join(__dirname,name)
         await download.saveAs(downloadpath)
         await this.page.pause()


    }

}