class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

// Without extend keyword class property access:

// const animal= new Animal("puppy",3);
// console.log(animal);
// console.log(animal.isCute());


// Use extend keywords:
class Dog extends Animal{
    
} 

const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.isCute());
