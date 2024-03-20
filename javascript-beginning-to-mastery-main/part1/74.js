// yeh mistake ni krni:
const user1 = {
    firstName : "harshit",
    age: 8,
    about (){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

user1.about();
const myFunc = user1.about.bind(user1);
myFunc();

