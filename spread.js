const ages =[12, 13, 56, 34, 23];
const ages2 =[23, 34, 32];
const ages3 =[23, 45, 56];
const allAge = ages.concat(ages2).concat(ages3).concat([5]); //old style
//using spread operator
const allAge2 =[...ages, ...ages2, ...ages3, 56];
// console.log(allAge);
// console.log(allAge2);

const business = 560 ;
const shochib = 456 ;
const minister = 654  ;

const maximum = Math.max(business,shochib,minister);
//or
const takaPoisha =[456, 987, 786];
const max = Math.max(...takaPoisha); // using spread operator

console.log(maximum);
console.log(max);