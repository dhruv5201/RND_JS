
import { expect } from 'chai';
import Page from './Page';

class Login extends Page{
    open(){
        super.open('login');

        //wait code
    }
    loginTest(uname,pwd){
        this.userName.addValue(uname);
        this.password.addValue(pwd);
        this.signIn.click();
        this.flash.waitForDisplayed();
        const message= this.flash.getText();
        expect(message).to.equal('You logged into a secure area!\n×');
        browser.pause(3000);
    }
    loginFailTest(uname,pwd){
        this.userName.addValue(uname);
        this.password.addValue(pwd);
        this.signIn.click();
        this.flash.waitForDisplayed();
        const failMessage= this.flash.getText();
        expect(failMessage).to.equal('Your username is invalid!\n×');
        browser.pause(3000);
    }

    get userName() {return $('#username');}
    get password() {return $('#password');}
    get signIn() {return $('[class="fa fa-2x fa-sign-in"]');}
    get flash() {return $('#flash');}
    

    
}

export default new (Login);