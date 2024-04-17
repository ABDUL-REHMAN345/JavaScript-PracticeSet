// Different object creation:

// function (that function create object)
// 2.) add key value pair
// 3.) object ko return krega

// const user1 = {
//   firstName: "harshit",
//   lastName: "vashits",
//   email: "abdulrehman034551@gmail.com",
//   age: 27,
//   address: "House Number,Street Number,City",
//   about: function () {
//     `${this.firstName} is ${this.age} years old.`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user1 = createUser(
  "harshit",
  "vashsith",
  "harshit@gmail.com",
  19,
  "my address"
);
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);
