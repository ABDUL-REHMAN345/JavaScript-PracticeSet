// param destructuring 

// object ka sath use hotta hai
// react ma bht ziadda use hotta hai

const person = {
    firstName: "harshit",
    gender: "male",
    age: 500
}

function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.gender);
}
printDetails(person);


// function printDetails({firstName, gender, age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }

// printDetails(person);