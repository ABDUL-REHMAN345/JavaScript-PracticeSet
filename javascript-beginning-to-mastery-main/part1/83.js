// new keyword => empty object create krey ga => second empty object ko return krey ga 
// 1.) this = {} => empty object create kr rahha hai
// 2.) return {} 
// 3.) Object.create(createUser.prototype);  =>> yeh kmm khud krey ga new keyword

// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 
// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function (){
//     return this.age >= 18; 
// }
// CreateUser.prototype.sing = function (){
//     return "la la la la ";
// }


// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());

// key dekhna ka lye:=> yeh prototype sy be key utha ka la rahha hai matlb ka jo method/function bna hai us ma sy be mujy bss user1 ki keys chahia tho us ka lye next topic cover kren gy hasOwnPropety() walla

// for(let key in user1){
//     console.log(key);
// } 

const UserInfo=function(firstName,age){
    this.firstName=firstName;
    this.age=age;
}
UserInfo.prototype.about=function(){
    console.log(`this is my ${this.name} and my age is ${this.age}`)
}
const ans=new UserInfo("Rehman",9);
console.log(ans);