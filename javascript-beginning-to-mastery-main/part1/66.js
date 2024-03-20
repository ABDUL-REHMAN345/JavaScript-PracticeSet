// iterables 
// jispe hum for of loop laga sakein
// string , array are iterable 

// const firstName = "Harshit";
// for(let char of firstName){
//     console.log(char);
// }

const items = ['item1', 'item2', 'item3'];
// for(let item of items){
//     console.log(item);
// }

// array like object => string hai array like object:
// jinke pas length property hoti hai 
// aur jiko hum index se access kar sakte hai
// example :- string / array:

// const firstName = "harshit";
// console.log(firstName.length);
// console.log(firstName[2]);



// let arrayLikeObject = {
//     0: 'apple',
//     1: 'banana',
//     2: 'orange',
//     length: 3
//   };
  
  // Accessing elements using numeric indices
//   console.log(arrayLikeObject[0]);  // Output: 'apple'
//   console.log(arrayLikeObject[1]);  // Output: 'banana'
//   console.log(arrayLikeObject[2]);  // Output: 'orange'
  
//   // Accessing the length property
//   console.log(arrayLikeObject.length);  // Output: 3


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
];

// Find the length of the array
const arrayLength = userCart.length;
console.log("Array Length:", arrayLength);

// Find the index of an item with productId 2
const targetProductId = 2;
const index = userCart.findIndex(item => item.productId === targetProductId);
console.log("Index of product with productId 2:", index);

  