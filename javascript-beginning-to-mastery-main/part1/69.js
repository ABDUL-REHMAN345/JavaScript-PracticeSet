// clone using Object.assign 

// memory  

const obj = {
    key1: "value1",
    key2: "value2"
}
// in spread operator i'm clone the array esily but new method today i have learn...In this file...

// const obj2 = {'key69': "value69",...obj};
const obj2 = Object.assign({'key69': "value69"}, obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);

