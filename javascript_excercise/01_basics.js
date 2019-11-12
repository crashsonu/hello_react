let string_var = 'This is string variable'
let doubleQuoteStringVar = "This is double quote string variable"
const constVar = "This is constant string variable"
console.log(constVar)
console.log(`This is backtiq print string variable ----- ${string_var}`)
let myArray = ["mon", 1, 2, 3.5]

for (let i=0; i<=myArray.length-1; i++){
    console.log(i + ' is = ' + myArray[i])
}
console.log('1111111111111111111111111111111111')
myArray.forEach(function(elem){
    console.log(elem)
})
console.log('1111111111111111111111111111111111')


