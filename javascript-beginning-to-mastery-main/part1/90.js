// getter and setters 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);
// console.log(person1.fullName());
// console.log(person1.fullName);
// person1.fullName = "mohit vashistha";
// console.log(person1);


// Phella iss trah code likha howa tha
// setName(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// Aik yeh tareqa hai
// person1.setName("mohit","vashistha");
// console.log(person1.firstName);
// console.log(person1.firstName);

// aik yeh tareqa hai
// person1.firstName="mohit";
// person1.lastName="vashistha"
// console.log(person1.firstName);
// console.log(person1.firstName);