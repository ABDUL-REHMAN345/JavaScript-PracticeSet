// find method 

const myArray = ["Hello", "catt", "dog", "lion"];

function isLength3(string){
    return string.length === 3;
}
// console.log(isLength3("dog"));
console.log(myArray.find(isLength3));

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
    {userId : 6, userName: "lal"},
];
// const myarr=function (user){
// return user.userId===3;
// }
// const ans=users.find((myarr)=>{
//     return myarr.userId===2;
// });
// console.log(ans)


// const myUser = users.find((user)=>user.userName.length===3);
// console.log(users);
// console.log(myUser);