//  --> normal function

// function greet() {
//   console.log("Hello");
// }

// greet();

// --> how can we take another function in argument

// function logGreet(fn) {
//   return fn();
// }

// logGreet(greet);

// -- a function which is store in one variable

// const fn = function () {
//   console.log("function is triggerd");
// };

// fn();

// but the main problem is it conqure the space so instead of that we use below code method direct call in the function

// logGreet(function () {
//   console.log("function triggred");
// });

// below is the code of the HOC example
{
  /*
    function sum(a, b) {
      return a + b;
    }
    function sub(a, b) {
      return a - b;
    }
    function mul(a, b) {
      return a * b;
    }
    function div(a, b) {
      return a / b;
    }
    
    function calculator(fun, a, b) {
      return fun(a, b);
    }
    
    console.log(calculator(sum, 1, 2));
    console.log(calculator(sub, 1, 2));
    console.log(calculator(mul, 1, 2));
    console.log(calculator(div, 1, 2));
    */
}

function greet() {
  console.log("Hello world");
}
function greetParentA() {
  console.log("This is the parent code of A ");
}
function greetParentB() {
  console.log("This is the parent code of B");
}
module.exports = { greet, greetParentA, greetParentB };
