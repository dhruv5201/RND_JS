//import { sum } from './math';
const {sum, mult, subs, devide} = require ('./math')
//const add = (a,b) => a + b;

test('Sum of 2 number : ' , () => {
    expect (sum(5 , 5 )).toBe(10)
})

test('Miltiplicatioin of 2 number : ' , () => {
    expect (mult(5 , 5 )).toBe(25)
})

test('Sub of 2 number : ' , () => {
    expect (subs(10 , 5 )).toBe(5)
})

test('Devision of 2 number : ' , () => {
    expect (devide(10 , 5 )).toBe(2)
})

