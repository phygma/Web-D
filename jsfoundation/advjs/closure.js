function outer(){
      let counter = 4;
      return function(){
            counter++
      }
}

let increment=outer()
console.log(increment());
console.log(increment());
console.log(increment());
