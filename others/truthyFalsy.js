// so if we consider the value of a variable = 0 ; then it will be false
//every number other than 0 will be true;
//every number is truthy other than 0
const age = 0; 

// if we declare a empty string it will be falsy! ex: const  name = '';
//but if we gave a space in the empty string it will be truthy ex: const name =' ';
// every string is truthy other than empty string
const name ='solaiman';

//any variables that is undefined will be falsy . ex:let address;
// null variables will be falsy too. ex: let address = null;
let address;
console.log(address);
if (address) {
    console.log('condition is true');
} else {
    console.log('condition is false');
}