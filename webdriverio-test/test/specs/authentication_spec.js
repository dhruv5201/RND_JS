import { expect } from 'chai'


describe ('Specific user cases' , ()=>{
beforeEach( ()=>{
    browser.url('https://the-internet.herokuapp.com/');
    browser.maximizeWindow();
});

it ('User Authenication Test- With Invalid User', ()=>{

    $('[href="/login"]').click();
    $('#username').addValue('abcd');
    $('#password').addValue('abcd');
    browser.pause(2000);
    $('[class="fa fa-2x fa-sign-in"]').click();
    $('#flash').waitForDisplayed();
    const error= $('#flash').getText();
    expect(error).to.equal('Your username is invalid!\n×');
    browser.pause(2000);
    browser.back();


});

it ('User Authenication Test- With Valid User', ()=>{

    $('[href="/login"]').click();
    $('#username').addValue('tomsmith');
    $('#password').addValue('SuperSecretPassword!');
    browser.pause(2000);
    $('[class="fa fa-2x fa-sign-in"]').click();
    $('#flash').waitForDisplayed();
    const error= $('#flash').getText();
    expect(error).to.equal('You logged into a secure area!\n×');
    browser.pause(2000);
    $('//i[@class="icon-2x icon-signout"]').click();
    $('#flash').waitForDisplayed();
    const error1= $('#flash').getText();
    browser.pause(2000);
    expect(error1).to.equal('You logged out of the secure area!\n×');
    browser.pause(2000);

});

});