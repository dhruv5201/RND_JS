import Page from './Page'
import { expect } from 'chai';
class forgotPassword extends Page{
    open(){
        super.open('forgot_password');
    }
    forgotPasswordTest(emailId){
        this.emailTextInput.addValue(emailId);
        this.retriveButton.click();
        const message=this.emailsentMessage.getText();
        //expect(message).to.equal('Your e-mail's been sent!')
        browser.pause(3000);
    }

    get emailTextInput(){return $('//input[@id="email"]');}
    get retriveButton(){return $('//i[@class="icon-2x icon-signin"]');}
    get emailsentMessage(){return $('//div[@id="content"]');}

    //div[@id='content']
}


export default new (forgotPassword);