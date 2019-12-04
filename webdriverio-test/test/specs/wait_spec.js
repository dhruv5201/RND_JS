import { expect } from 'chai'



describe ('Wait Demostration' , ()=>{
beforeEach( ()=>{
    browser.url('https://the-internet.herokuapp.com/');
    browser.maximizeWindow();
});

xit ( 'Wait for Displayed ', ()=>{

    $('a=Dynamic Loading').click();
    $('[href="/dynamic_loading/1"]').click();
    $('#start button').click();
    $('#finish h4').waitForDisplayed();
    const text=$('#finish h4').getText();
    console.log(text);
    expect(text).to.equal('Hello World!');

});

xit ( 'Wait for Exist ', ()=>{

    $('a=Dynamic Loading').click();
    $('[href="/dynamic_loading/2"]').click();
    $('#start button').click();
    //$('#finish h4').waitForExist(); // Before v 5.
    const text=$('#finish h4').getText();
    console.log(text);
    expect(text).to.equal('Hello World!');

});

xit ( 'Wait for Disappear ', ()=>{

    $('a=Dynamic Loading').click();
    $('[href="/dynamic_loading/1"]').click();
    $('#start button').click();
    //$('#finish h4').waitForExist(); // Before v 5.
    $('#loading').waitForDisplayed(undefined,true);
    const text=$('#finish h4').getText();
    console.log(text);
    expect(text).to.equal('Hello World!');

});

xit ( 'Wait for Enabled ', ()=>{

    $('a=Dynamic Controls').click();
    $('#input-example button').click();
    //$('#finish h4').waitForExist(); // Before v 5.
    $('#input-example input').waitForEnabled();
    $('#input-example input').addValue('Text');
    browser.pause(3000);

});

xit ( 'WaitUntil Test ', ()=>{

    $('a=Dynamic Controls').click();
    $('#checkbox-example button').click();
    browser.waitUntil( ()=> {
        return !$('#checkbox checkbox').isExisting();
    },5000,'Checkboxes does not removed');
    
    browser.pause(3000);

});


});