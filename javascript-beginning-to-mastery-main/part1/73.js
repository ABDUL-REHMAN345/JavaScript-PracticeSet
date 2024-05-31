// call,apply,bind methods...

// function hello(){
//     console.log("hello world");
// }
// hello.call(); => is trah be call lga k function ko call kr skty hain


function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}

//ager function howa tb yeh ho ga => 
user1.about.call(user2,"guitar","hobbies"); 


// Ager Method bahir likho gy tho phr essy print krwao gy... 
// call
// about.call(user1,"guitar", "bach");


// apply
// about.apply(user1, ["guitar", "bach"]);list ma value pass kr denni hai
// const func = about.bind(user2, "guitar", "bach");
// func();

// bind
// const func=about.bind(user1, "guitar", "bach");function return kr dy ga
// func();ussa call kr lo
