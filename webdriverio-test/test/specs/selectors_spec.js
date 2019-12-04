import assert from 'assert'
import { expect } from 'chai'

describe ('Various SELECTORS Practice', ()=>{
    before(()=>{
        browser.url('https://the-internet.herokuapp.com/');
        browser.maximizeWindow();
    });

    xit('CSS Selector Test' ,()=>{
        //By heading and by heading text.- Getting text from H1 and H2
        const h1Text= $('.heading').getText(); // By id
        const h2Text= $('h2=Available Examples').getText();
        console.log('H1 Text is: ' + h1Text);
        console.log('H2 Text is: ' + h2Text);

        //By tag - Click on Broken Images link
        $('a=Broken Images').click();
        browser.pause(3000);
        browser.back();
        browser.pause(3000);
        
    });

    xit('Link Text Test', ()=>{
       // Getting element by text only 
       const link= $('=Checkboxes'); // by Class
       console.log(link.getText());
       // Getting attribute of an element
       console.log(link.getAttribute('href'));
       link.click();
       browser.pause(3000);
       browser.back();
       browser.pause(3000);

    });

    xit('Partial Link Text Test', ()=>{
        // Getting element by partial text
        const partialLink= $('*=Context');
        console.log(partialLink.getText());
        //console.log(link.getAttribute('href'));
        partialLink.click();
        browser.pause(3000);
        browser.back();
        browser.pause(3000);
    });

    xit('Element with certain  Text Test', ()=>{
        //Getting element by Text
        const element= $('a=Dynamic Content');
        console.log(element.getText());
        //console.log(link.getAttribute('href'));
        element.click();
        browser.pause(3000);
        browser.back();
        browser.pause(3000);
        //Getting element by Partial Text
        const element1= $('a*=Dynamic');
        element1.click();
        browser.pause(3000);
        browser.back();
        browser.pause(2000);
        



    });

    xit('Tag Name Test', ()=>{
        $('a=Inputs').click();
        // Getting elements by Tag name.
        const element= $('<input>')
        element.setValue(5555);
        browser.pause(3000);
        browser.back();
        browser.pause(2000);
        
    });

    xit('xPath Test', ()=>{
        $('//a[contains(text(),"Drag and Drop")]').click();
        browser.pause(3000);
        browser.back();
        browser.pause(2000);
        
    });

    xit('Getting parent node (one level up ) ', ()=>{
       const text= $('ul').$('..').getText();
       console.log(text); 
        
    });
    it('Nested $ locator. ', ()=>{
        const text= $('ul').$('a=Checkboxes').getText();
        $('ul').$('a=Checkboxes').click();
        console.log(text); 
        browser.pause(2000);
        browser.back();
        browser.pause(2000);
     });

    
});