import Page from './page';

class ResetPage extends Page {

    
    private get email(){ return $('[placeholder="name@company.com"]')}
    private get submit(){ return $('[data-qa="submit-button"]')}
    private get errorMessage (){ return $('rx-alert[type="danger"]')}

    async enterEmailid(emailid:string){
        await (await this.email).setValue(emailid)
    }

    async clickOnSubmitBtn(){
        await (this.submit).click()
    }

    async getEmailError(){
        await (this.errorMessage)
    }

}
export default new ResetPage();