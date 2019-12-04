//const assert = require('assert')
import assert from 'assert'
import { expect } from 'chai'

describe('webdriver.io page', () => {
    before(()=>{
        browser.url('https://demo.testfire.net/login.jsp');
        browser.maximizeWindow();
        console.log('before');
        
    });
    it('Should have the right title.', () => {
        const title = browser.getTitle();
       // assert.strictEqual(title, 'Altoro Mutual');
       
        expect(title).to.equal('Altoro Mutual');
        
    
    });
    it('Login should success with Correct user credentials.', ()=>{
        $('#uid').setValue('Admin');
        $('#passw').setValue('Admin');
        $('[name="btnSubmit"]').click();
        expect($('//h2[contains(text(),"Congratulations!")]').isDisplayed(),'Wellcome text is NOT displayed').to.equal(true);

        let WelcomeTxt = $('//h2[contains(text(),"Congratulations!")]').getText();

        assert.strictEqual(WelcomeTxt, 'Congratulations!');
    });

    it('To get All links text.' , ()=>{
        const links=$$('a');
        const LinkText=[];
        links.forEach(link => {
            LinkText.push(link.getText());
        });
        console.log(LinkText);
    })
});

