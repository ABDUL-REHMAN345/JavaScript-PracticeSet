// primitve vs reference data types
// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);


// reference types 
// array 
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);




// //Array and Object are mutable:

// const mutableObject = { key: 'value' };
// mutableObject.key = 'new value'; // Modifying the property of the object
// mutableObject.newKey = 'new property'; // Adding a new property to the object
// delete mutableObject.key; // Deleting a property from the object
// console.log(mutableObject); // Output: { newKey: 'new property' }



// // imutable like primitive types:

// const immutableNumber = 5;
// // Trying to modify the value of immutableNumber will result in creating a new number
// const newImmutableNumber = immutableNumber + 1;
// console.log(immutableNumber); // Output: 5 (original number remains unchanged)
// console.log(newImmutableNumber); // Output: 6 (new number created)
