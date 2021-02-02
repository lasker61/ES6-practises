//old system
const numbers =[2, 4, 5, 6, 9];
const newNumbers =[];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    newNumbers.push(result);  
}
console.log(newNumbers);

//using map
numbers.map(function(element,index,array){
    console.log(element,index,array);
})

//lets find square number of each element using map
const output = numbers.map(function(element){
    return element * element;
})
console.log(output); 

//another way using map and arrow function
const square = element => element * element;
const output = numbers.map(square);
console.log(output);

//another way
const result = numbers.map(element => element * element);
console.log(result);

//using filter we can filter items,select specific items

const result = numbers.filter(element => element > 4);
const isThere = numbers.find(element => element > 4);
console.log(result);
console.log(isThere);



  