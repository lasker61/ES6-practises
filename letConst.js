// let and const are block scoped.
// The value of a constant can't be changed through reassignment, and it can't be re-declared.

const husband = 'Elias Kanchon';
// husband = 'omar sani'; //we can not reassign the value of husband
console.log(husband);



const number = 42;
try {
  number = 99;
} catch (err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}
console.log(number);
// expected output: 42


const numbers = [23,45,2,34,34];
numbers[0] = 5;                // that means we can update the value of any index in an array
console.log(numbers);
numbers.push(345);            //we can push or pop element
console.log(numbers);

//on a serious note we can not reassign the array 
//for example
numbers = [3,45,234,23];


/////let
// let allows us to change the value of the variable but inside the scope

let patient = 'rahim chacha';
patient = 'fatima khala';
console.log(patient);


let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 1
