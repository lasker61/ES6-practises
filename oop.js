class Parent{
    constructor(){
        this.fatherName = 'iqbal';
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby1 = new Child('rafa');
const baby2 = new Child('nafi');
console.log(baby1);
console.log(baby2);