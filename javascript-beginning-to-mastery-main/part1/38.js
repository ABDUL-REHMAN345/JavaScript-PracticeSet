// how to iterate object 
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}


// for in loop 
// Object.keys 

// for(let key in person){
    // console.log(person.key); Output Undefine Iss lye ka wo object ma dekha ga k koi key name ka variable hai nai hai tho undefined krr dy ga iterate n krey ga...is lye "Key" value chahia tho ap brackey lgao mean console.log(person[key]);


    // Step=2:
//     // console.log(`${key} : ${person[key]}`); //Template String
//     console.log(key," : " ,person[key]);
// }


 // Step=3:
// console.log(typeof (Object.keys(person)));
const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

