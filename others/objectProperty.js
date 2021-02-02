const student =[
    {
        name : 'nahid lasker',
        id : 1612634,
        city :'dhaka' 
    },
    {
        name : 'zaraf khan',
        id : 2345645,
        city :'chittagong'
    },
    {
        name : 'joss khan',
        id :765645,
        city :'khulna'
    }
];
//old system
// const newStudent =[];
// for (let i = 0; i < student.length; i++) {
//     const element = student [i];
//     const output = element.name;
//     newStudent.push(output);  
// }
// console.log(newStudent);

//using map
const names = student.map( s => s.name);
console.log(names);
const city = student.map( s => s.city);
console.log(city);

//filter

const ids = student.filter(s => s.id > 111);
console.log(ids);
