//Number

let balance = 120
let anotherBalance = new Number(120)

// console.log(balance);
// console.log(anotherBalance)


console.log(typeof(balance));// Number
console.log(typeof(anotherBalance));//this gets converted into an object which means primitive to non primitive by using the new keyword

//boolean
let isActive = true
let isReallyActive = new Boolean(true) // not recommended


//null and undefined

// let firstname
// console.log(firstname)//it is undefined beacuse we have not given the defination
// if we comment out the line number 20

//string

let myString= "hello"
let myStringOne ="Hola"
let username ="hitesh"

let oldGreet = myString + 'hitesh'
console.log(oldGreet)

let greetMessage = 'hello' ;

let sm1 = Symbol("hitesh");
let sm2 = Symbol("hitesh");

console.log(sm1 == sm2);




