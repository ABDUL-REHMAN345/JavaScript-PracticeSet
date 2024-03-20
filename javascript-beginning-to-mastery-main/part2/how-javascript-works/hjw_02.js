// hoisting => code ka execute krna sy phella global memory ma variable create ho jatty hai r create honna bdd execution start hotti hai.jb global execution ma hum enter hotta hai tho memory ma variable create ho jatty hain
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