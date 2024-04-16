// arrow functions 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        // console.log(this);
        console.log(this.firstName, this.age);
    }   
}
// arrow function ka this ni hotta wo jo this letta hai wo apna surronding sy letta hai ==> wo jo this ly ga aik level upper sy ly ga mean surronding sy ly ga:
// Arrow function ka this window object ho ga iss arrow function ka case ma ghalti ni krnni project ka time issa dekhen gy:

// user1.about(user1);
// user1.about.call(user1);