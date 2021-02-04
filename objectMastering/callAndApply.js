const person ={
    firstName : 'Nahid',
    lastName  : 'uddin',
    salary    :15000,
    getFullName : function(){
        console.log(this.firstName +' '+ this.lastName);
    },
    chargeBill : function(amount){
      this.salary = this.salary - amount;
      return this.salary;
    }
}
console.log(person.lastName);
person.getFullName();
person.chargeBill(300);
console.log(person.salary);
