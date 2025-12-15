export class Siteone{

    constructor(page){
        this.page = page;
        this.firstname =page.locator('[id="firstName"]')
        this.email = page.locator('[id="userEmail"]')
        this.gender= page.locator('[id="gender-radio-2"]')
        this.usernumber = page.locator('[id="userNumber"]')
        this.dateofbirth= page.locator('[id="dateOfBirthInput"]')
        this.subject = page.locator('[id="subjectsContainer"]')
        this.hobbies = page.locator('[id="hobbies-checkbox-2"]')
        this.choosefile = page.locator('[type="file"]')
        this.currentaddress = page.locator('[id="currentAddress"]')
        this.state = page.locator('[class="css-19bqh2r"]').nth(0)
        this.city = page.locator('[id="city"]')
        //this.state = page.locator('[id="submit"]')
        this.dropdownvalue = page.getByText('Uttar Pradesh', { exact: true })
    }
        
        async launchUrl(url){    //To call actions
        await this.page.goto(url)
         }

         async addText(name,email1){
         await this.firstname.fill(name)
         await this.email.fill(email1)
         await this.gender.dispatchEvent('click')
         await this.state.click()
         await this.dropdownvalue.click()

        
         }


}