// function doubleIt(num){
//     return num*2;
// }
//another way of declaring function

// const doubleIt = function(num){
//     return num*2;
// }

//es6 makes it more easier .we can write it in one line

const doubleIt = num => num*2;
const add = (num1,num2) => num1 + num2;
const give5 = () => 5;
const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const answer = sum * diff;
    return answer;
}

const result = doubleIt(50);
const result1 = add(34,34);
const result2 = give5();
const result3 = doMath(45,5);
const result4 = doMath(34,12);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
