// nested destructuring 
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'shemale'},
]

const [user1,user2,user3]=users;
console.log(users);
// const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
// console.log(user1firstName);
// console.log(userId);
// console.log(user3gender);
