const bob ={
    fname :'Bob',
    lname :'sanders',
    city :'chikago',
    phone : 9575935-6-43,
    siblings:{
        sister: 'jane',
    },
};

// const name = bob.fname +' '+bob.lname;
// const city = bob.city;
// const sister =bob.siblings.sister;
// console.log(name ,city, sister);

//destructuring

const{fname,city} =bob;
console.log(fname,city);