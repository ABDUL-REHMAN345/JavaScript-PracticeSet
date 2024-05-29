const obj1 = {
    key1: "value1",
    key2: "value2"
}

// __proto__ yeh aik khalli "object/{}" dy ai hai r reference set kr rai hai object ka...

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]]



// prototype    

const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object
// const obj2={};
obj2.key3 = "value3";
// obj2.key2 = "unique";

// Empty object dyga yeh neecha wallli line
console.log(obj2);
console.log(obj2.key1);
// obj2.__proto__ dender be bolta hai issa JS ma: ==> is ko chain be bollta hai:
console.log(obj2.__proto__);

