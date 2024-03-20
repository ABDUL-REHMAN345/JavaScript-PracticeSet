// block scope vs function scope 


// let and const are block scope
// var is function scope 

// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }

// console.log(firstName);
let firstName="harshit";
function myApp(){
    if(true){
        let firstName = "sharma";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}
console.log(firstName);
myApp();