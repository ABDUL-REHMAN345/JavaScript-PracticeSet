// callback functions 
// koi be function As a argument lyga koi be function r ussa call kr dy ga this is callback function...

function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there I am a func and I can..")
    callback("harshit");
}


// practice:
// myFunc(myFunc2);

// function myFunc2(name){
//     console.log("inside my Func2 is..")
//     console.log(`my name is ${name}`)
// }
// function myFunc(callback){
//     console.log("inside myFunc is...")
//     callback("rehman");
// }
myFunc(myFunc2);




// Practice:

// callback Function:

// function numbers(name){
//     console.log("Hello World");
//     console.log(`Name is ${name}`)
// }
// function number1(callback){
    // callback() => callback ma purra function aa gyah hai this is callback function:
//     console.log(`the name is`)
//     callback("Rehman")
// }
// number1(numbers);