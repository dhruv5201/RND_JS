import { expect } from 'chai'


describe ('Execute Demonstration' , ()=>{
beforeEach( ()=>{
    browser.url('https://the-internet.herokuapp.com/');
    browser.maximizeWindow();
});

it ('Execute 1 test' , ()=> {
    browser.pause(3000);
    browser.execute(()=>{

        document.querySelector('.heading').style.color='red'; //Change Color of the Text
        
    });
    browser.pause(3000);

    /*browser.execute(()=>{

        document.querySelector('.heading').remove(); //Remove a elements from a webpage
    });
    */
   browser.pause(3000);

    const param='Dhrubajit';
    browser.execute((ourText)=>{

        document.querySelector('.heading').textContent=ourText; // Changing the Text of the Heading.
    },param);

    browser.pause(3000);
});
});