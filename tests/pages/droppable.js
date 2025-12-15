export class Droppable{

    constructor(page){
        this.page = page
        this.draggable = page.locator('[id="draggable"]')
        this.droppable = page.locator('[id="simpleDropContainer"] [id="droppable"]')
    }
    
    async drag(){
        const source = await this.draggable
        const destination = await this.droppable
        await source.dragTo(destination)
    }



}