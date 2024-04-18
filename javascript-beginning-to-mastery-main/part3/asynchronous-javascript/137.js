// Promise.resolve
// Promise chaining

// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//   console.log(value);
// })


// then()
// then method hamesha promise return karta hai


function myPromise(){
  return new Promise((resolve, reject)=>{
    resolve("foo");
  })
}

myPromise()
  .then((value)=>{
    console.log(value);
    value += "bar";
    
    // return promise.resolve(value)=> internally JS essy km kr rahha hai =>matlb essy promise return kr rai hai...return na likho tho "undefined" return ho ga=> promise return ho ga lakin JS na iss trah krr dia internally yeh km ho rahha hoga....return promise.resolve(undefined)...

    return value
  })
  .then((value) =>{
    console.log(value);
    value += "baaz";
    return value;
  })
  .then(value=>{
    console.log(value);
  })


