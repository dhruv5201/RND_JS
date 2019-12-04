import forgotPassword from './classes/forgotPassword_page'


describe ('Forgot Password page ' , ()=>{
    it ('Forgot Passwrd test',()=>{
        forgotPassword.open();
        forgotPassword.forgotPasswordTest('dhruabjit@gmail.com');


    });

});