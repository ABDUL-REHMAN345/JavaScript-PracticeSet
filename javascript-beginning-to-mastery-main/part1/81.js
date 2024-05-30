function hello(){
    console.log("hello world");
}

// const hello={key1:"value1"};

// if(hello.prototype){
//     console.log("present")
// }else{
//     console.log("not present")
// }yeh btahey ga k sirf function he jo hai wo prototype property detta hai:

// javascript function ===> function  + object

// console.log(hello.name); name btah detta hai function ka ky kia name hai:

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);//function ko ap object ki trah treat kr skty hai function be object ki trah hotta hain:

// name property ---> tells function name;

// function provides more usefull properties. for example:: =>> call/apply/bind method waghera....

// function hamen free space dein gy ==> free space Object hai r wo hain "prototype": 
console.log(hello.prototype); // {}/constructor


// only functions provide prototype property

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());





// Not Related to this topic: Extra Knowledge gain about JS....

// Recursion in JS

/**Recursion in JavaScript is a programming technique where a function calls itself in order to solve problems that can be broken down into smaller, similar subproblems. Recursion provides an elegant and concise way to solve problems that involve repeated tasks or patterns. */

// function factorial(n) {
//     // Base case
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     // Recursive case
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Output: 120




// Spread operators in JS:
/**
The spread operator (...) and rest parameter (...) in JavaScript use the same syntax of three dots (...), but they serve different purposes and are used in different contexts. Here's a detailed comparison to help you understand the differences and uses of each:

Spread Operator
Purpose: The spread operator is used to expand an iterable (such as an array, object, or string) into individual elements.

Contexts:

Function calls: Expanding an array into individual arguments.
Array literals: Combining or cloning arrays.
Object literals: Merging or cloning objects. */



// Example:

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined); // [1, 2, 3, 4, 5, 6]



//  Rest Parameters in JS:
/**Rest Parameter
Purpose: The rest parameter allows a function to accept an indefinite number of arguments as an array.

Context:

Function parameters: Collecting all remaining arguments into an array. */

// Example:

// function sum(...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4)); // 10
