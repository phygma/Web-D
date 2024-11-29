/*
1. Write a functoin named 'maketea' that takes one parameter, 'typeOfTea' , and returns a string like '"Making green tea"' when called with '"green tea"',
Store the result in a variable named 'teaOrder'.
*/

// function maketea(typeOfTea){
//       return('hello'+" "+ typeOfTea)
// }

// let greet = makeTea("lemon tea")
// console.log(greet)

/*
2. Create a function named 'orderTea' that takes one parameter, 'teaType'. Inside this function, create another function named 'confirmOrder' that returns a message like '"Order confirmed for chai"'.
Call 'confirmOrder' from within 'orderTea' and return the result.
*/

// function orderTea(teaType)
// {
//       function confirmOrder()
//       {
//             console.log("Order confirmed for chai");
//       }

//       return confirmOrder();

      
// }

// let a = orderTea("Lemon Tea");
// console.log(a);

/*
3. Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and ' quantitiy'. The function should return the total cost by multiplying the 'price' and 'quantity'.
Store the result in a variable named 'totalCost'.
*/
// Eg:
// function greet(){}
// const greet= ()=>{}

// const calculateTotal =(price, quantitiy)=>{
//       return price * quantitiy
// }
// let totalCost = calculateTotal(499,100)
// console.log(totalCost)

/*
4.Write a function named ' processTeaOrder' that takes another function, ' makeTea' , as a parameter and calls it with the argument '"earl grey"'.
return the result of calling 'makeTea'.
*/
function makeTea(typeOfTea){}
function processTeaOrder(teafunction)
{
      return teafunction("earl grey")
}

let order = processTeaOrder(makeTea)
console.log(order) 