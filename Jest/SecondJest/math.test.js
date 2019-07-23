//const {sum, mult , subs , devide} = require ('./math1')
const mathFunctions = require ('./math')


test('Sum of 2 number : ' , () => {
    expect (mathFunctions.sum(5 , 5 )).toBe(10)
})

test('Miltiplicatioin of 2 number : ' , () => {
    expect (mathFunctions.mult(5 , 5 )).toBe(25)
})

test('Sub of 2 number : ' , () => {
    expect (mathFunctions.subs(10 , 20 )).toBe(-10)
})

test('Devision of 2 number : ' , () => {
    expect (mathFunctions.devide(10 , 5 )).toBe(2)
})

