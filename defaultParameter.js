//old system
function add(num1,num2){
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    num2 =num2 || 0; // we can use either one for default parameter
    return num1+num2;
}
const total = add(15);
console.log(total);

// this is very easy in es6

function addNumbers(number1,number2=0){
    return number1+number2;
}
console.log(addNumbers(345));
