import Page from './page';

class LoginPage extends Page {
  
    private get submit(){ return $('button[type=submit]')}

    async clickOnSubmitBtn(){
        await (this.submit).click()
    }

    private get emailError() {return $('.ng-tns-c93-0[data-qa=div-error]')}

    private get passwordError() {return $('.ng-tns-c93-1[data-qa=div-error]')}


    async getEmailError(){
        await (this.emailError)
    }

    async getPasswordError(){
        await (this.passwordError)
    }

}
export default new LoginPage();