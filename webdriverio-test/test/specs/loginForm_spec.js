import Login from './classes/Login_page';


describe ('Specific user cases' , ()=>{

it ('User Authenication Test- With Valid User', ()=>{

    Login.open();
    Login.loginTest('tomsmith','SuperSecretPassword!');
    
});

it ('User Authenication Test- With InValid User', ()=>{

    Login.open();
    Login.loginFailTest('InvalidUser','InvailPasswrd!');
    
});
});