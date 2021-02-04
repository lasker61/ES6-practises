// const bonus =40;
// function sum(num1,num2){
//     let result = num1 + num2;
//     //console.log(result);      /ok
//     console.log(bonus);
//     return result;
// }
// // console.log(result);// we can not do it because result is local variable and we cal only access it inside the sum function
// console.log(sum(3,8));
// console.log(bonus);  //so we can access bonus anywhere throughout the program because it is global variable


/**
 * Hoist is a verb meaning to raise. 
 * JavaScript does the exact same thing to hoist (raise) a variable declaration and a function declaration to the top of a function scope. 
 * Those variables and functions can be used from any part of the function without raising no reference Exception.
 * 
 * 
 * In the code block below, the variable "b" is declared after the return statement. 
 * If you execute the foo function, you will not receive the no reference error. 
 * If you dont trust me, copy this code and run it at your console.
 */

function foo(){
    return b;
    var b = 7;  
  }
  foo(); 