//null is a value.undefined is declared but no value is assigned to variable.undeclared is that the variable is bot declared yet.
// Undeclared 
//lets print a variable
console.log(age);
/*
here we are trying to access a variable which is not declared.
we can declare it like - let age = 30;
*/

//undefined
let fname;
console.log(fname); 
/* 
 here we can se the variable is declared but no value is assigned to it
 so the output will be undefined
 if we write a function and do not return properly,we can get undefined
 function add(num1,num2){
     console.log(num1+num2);
     return                    ///what is going to be return from here? so it will be undefined
 } 
 if we do not pass parameter properly we can get undefined
 function add(num1,num2){
     return num1 +num2                
 } 
console.log(add(34));

we can also set a variable undefined
*/

//null is a value.if do not have a value we can write null.

let price = null;
console.log(price);