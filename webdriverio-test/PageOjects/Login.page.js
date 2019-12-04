const Page= require ('./PageObjecs/page')
class LoginPage extends Page{
    get username(){return $('#uid')}
    get password() {return $('#passw')}
    get logininBtn() {return $('[name="btnSubmit"]')}

    open(){
        super.open('https://demo.testfire.net/login.jsp')
    }

    submit(){
        this.logininBtn.click()
    }

}

module.exports=LoginPage;
