import { expect } from 'chai'


describe ('Forms & Input Demostration' , ()=>{
beforeEach( ()=>{
    browser.url('https://the-internet.herokuapp.com/');
    browser.maximizeWindow();
});

xit ('Input test' , ()=> {
    $('a=Checkboxes').click();
    // Getting all avilable checkboxes and select first one
    const checkbox_one=$('[type="checkbox"]:nth-child(1)');
    expect(checkbox_one.isSelected()).to.be.false;
    browser.pause (5000);
    checkbox_one.click();
    expect(checkbox_one.isSelected()).to.be.true;
    
    browser.pause(3000);

});
xit ('Dropdown Test' , ()=>{

    $('a=Dropdown').click();
    $('#dropdown').selectByVisibleText('Option 2');
    expect($('#dropdown').getValue()).to.equal('2');
    browser.pause(3000);

});

it ('Inputs Test' , ()=>{

    $('a=Form Authentication').click();
    //Added value in the Input box
    $('[name="username"]').addValue('abc');
    browser.pause(3000);
    $('[name="username"]').addValue('def');
    browser.pause(3000);
    //Clear the input box and then added value into it.
    $('[name="username"]').setValue('NewValue');
    console.log($('[name="username"]').getValue());
    browser.pause(3000);
    $('[name="username"]').clearValue();
    browser.pause(3000);

});

});