// class Person{
//     constructor(name ,age){
//         console.log("baap bol rha huu")
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`hi, I am ${this.name}`);
//     }

// }
// class Student extends Person {
//     constructor(name,age,marks){
//         console.log("hanji papa");
//         super(name,age); // calling parent(person) class construtor 
//         this.marks=marks;
//     }

// }
// class Teacher extends Person{
//     constructor(name,age,subject){
//         super(name,age);
//         this.subject=subject;
//     }
// }

// mammal
class Mammal { // base/ parent
    constructor(name){
        this.name=name;
        this.type="warm blooded";//default argument
    }
    eat(){
        console.log("I am eating...")
    }
}
class Dog extends Mammal{ // child
    constructor (name){
        super(name);
    }
    bark(){
        console.log("woof..!");
    }
     eat(){
        console.log("dog am eating...")// to override the parent eat function
    }
}
class Cat extends Mammal{ //child
    constructor (name){
        super(name);
    }
    meow(){
        console.log("meow..!");
    }
}
