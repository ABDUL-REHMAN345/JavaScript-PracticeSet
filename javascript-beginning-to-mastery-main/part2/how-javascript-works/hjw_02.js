// hoisting => code ka execute krna sy phella global memory ma variable create ho jatty hai r create honna bdd execution start hotti hai.jb global execution ma hum enter hotta hai tho memory ma variable create ho jatty hain

// Code Execute sy phella Memory ma variable create ho jatt hai yeh be kreh skty hain...

// javaScript ko lexing Scope language be bollta hain
// JS jo variable store krta hai wo key value pair ma store krta hai usko "Environment Report" bollta hain...
// jo "Global Execution Context" yeh "Function Execution Context" hai wo aik "Stack" ma hotta hai

console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "Harshit";
var lastName = "Sharma"
var fullName = firstName + " " + lastName;
console.log(fullName);


