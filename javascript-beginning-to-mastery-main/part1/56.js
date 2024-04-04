// important array methods 
// forEach as a input ly ga callback function ko r print kr

 const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
//     // console.log(`index is`,index)
//     // console.log(number*2);
//     // console.log(`${number}*2=${number*2});
// }
// // console.log(myFunc(numbers[0],0))

// for(let i=0;i<numbers.length;i++){
//         myFunc(numbers[i],i)
// }
// numbers.forEach(myFunc);

numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`);
});

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

// function sum(number){
//     console.log(number.age*2);
// }
// users.forEach(sum);

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }


//Practice:

// forEach:

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// const ans=users.map((users)=>{
// return users.firstName;
// })
// console.log(ans);