// synchronous programming vs asynchronous programming
// synchronous programming
// synchronous programming single threaded
// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");

// setTimeout ==> As a function ly ga input mean callback function lyga input r second time lyga ka kitni dair bdd function call krna hai:


// First Program in Video:

// console.log("script Start");
// for(let i=0;i<100;i++){
//   console.log("Inside For Loop");
// }
// console.log("script end");


// setTimeout: yeh hamare pass aik function letta hai r sath ma time be btanna parta hai:

console.log("script start");

const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

for (let i = 1; i < 100; i++) {
  console.log("....");
}
console.log("settimeout id is ", id);
console.log("clearing time out");
// id hamare pass tbb use hotti hai jb hamen iss function ko run ni krna tho hm (clearTimeout) method use krta hain....
clearTimeout(id);
console.log("Script end");
