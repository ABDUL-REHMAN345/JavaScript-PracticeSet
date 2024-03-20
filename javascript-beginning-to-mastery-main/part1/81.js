function hello(){
    console.log("hello world");
}

// if(hello.prototype){
//     console.log("present")
// }else{
//     console.log("not present")
// }yeh btahey ga k sirf function he jo hai wo prototype property detta hai:

// javascript function ===> function  + object

// console.log(hello.name); name btah detta hai function ka ky kia name hai:

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);//function ko ap object ki trah treat kr skty hai funxtion be object ki trah hotta hain:

// name property ---> tells function name;

// function provides more usefull properties.

// function hamen free space dein gy ==> free space Object hai r wo hain "prototype": 
// console.log(hello.prototype); // {}/constructor


// only functions provide prototype property

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());