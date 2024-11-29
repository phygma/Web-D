let car = {
      make:"Toyota",
      model: "Camry",
      year: 2020,

      start: function(){
            return (this.make + " car got started in " + this.year);
      },
};

// console.log(car.start());  

function Person (name, age){
      this.name = name;
      this.age = age;
}

let john = new Person("John", 20)
// console.log(john.name);

function Animal(type){
      this.type = type
}

Animal.prototype.speak = function(){
      return (this.type + " makes a sound")
}

Array.prototype.hitesh = function (params){
      return ("Custom method " + this)

}

// let myArray = [1,2,3];
// console.log(myArray.hitesh());
let myNewArray = [1,2,3,4,5,6];
// console.log(myNewArray.hitesh());


//INHERITENCE
class Vehicle{
      constructor (make, model){

            this.make = make
            this.model = model
      }

      start(){
            return ( this.model + " is a car from " + this.make)
      }
}

class Car extends Vehicle{
      drive(){
            return (this.make + " : This is an inheritence example")

      }
}

let myCar = new Car("Toyota","Corolla")
// console.log(myCar.start());
// console.log(myCar.drive());

//ENCAPSULATION

class BankAccount{
      #balance = 0;

      deposit (amount){
          this.#balance +=amount 
          return this.#balance;
      }

      getBalance(){
            return ( "$" + this.#balance); 
      }
}

let account = new BankAccount();
// console.log(account.balance)
// console.log(account.getBalance());


//ABSTRACTION

class CoffeeMachine{
      start(){
            //call DB
            //filter value
            return 'Starting the machine...';

      }
      brewCoffee(){
            //complex calculus
            return 'Brewing coffee';

      }
      pressStartMethod(){
            this.start();
            this.brewCoffee();
      }
}

let myMachine = new CoffeeMachine()
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartMethod());

//POLYMORPHISM

class Bird{

      fly(){
            return 'Flying .....'
      }
}

class Penguin extends Bird{
      fly(){
            return "Penguins can't fly"
      }
}

let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly())

//STATIC METHOD

class Calculator{
      static add(a,b){
            return a+b
      }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2,3));

console.log(Calculator.add(2,3));

//GETTERS AND SETTERS

class Employee{
      #salary;
      constructor( name, salary){
            if (salary <0){
                  throw new Error("Salary cannot be negative")
            }
            this.name = name;
            this.#salary = salary;

      }

      get salary(){
            return "you are not allowed to see the salary";
      }

      set salary(value){
            if (value<0){
                  console.error("Invalid salary")
            }
            else{
                  this._salary = value;

            }
      }
}
let emp = new Employee ( "Alice", 50000);
console.log(emp.salary);
