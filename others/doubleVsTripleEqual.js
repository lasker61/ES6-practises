//double ==
const first =2;
const second ='2';
if (first == second) {
// if (first === second) {
    console.log('both are same');
} else {
    console.log('they are not same');
}

/*2 does not strictly equal '2' because they have different types. However, 
if we were to test these values with loose equality…
2 == '2' will be true.
it does not check the type

When using double equals in JavaScript we are testing for loose equality. Double equals also performs type coercion.
Type coercion means that two values are compared only after attempting to convert them into a common type.
An example will illustrate this. Recall earlier when we tested the following with strict equality:
77 === '77' // false (Number v. String)
77 == '77' // true 
*/


//now triple ===
/**
 * When using triple equals === in JavaScript, we are testing for strict equality.
 *  This means both the type and the value we are comparing have to be the same.
 * 5 === 5
 * In this first example we’re comparing the number 5 with the number 5.
 * As expected, true is returned. Both are numbers, and both share the same value of 5
 * 77 === '77' -false (Number v. String)
 * 'cat' === 'dog' -false (Both are Strings, but have different values)
 */
