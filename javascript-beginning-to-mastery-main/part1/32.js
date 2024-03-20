// while loop in array 
const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];
// let i = 0;
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2);

// for in loop:
for(fruit in fruits){
    fruits2.push(fruits[fruit].toUpperCase())
}
console.log(fruits2)
