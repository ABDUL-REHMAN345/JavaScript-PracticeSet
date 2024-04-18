// Promise
console.log("script start");
const bucket = ['coffee', 'chips','vegetables','salt','rice'];


// promise ki bracket ka andar jo parameters hai resolve and reject ka inna hum (Executor Function) bollta hai
const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"});
    }else{
        // reject(new Error("could not do it")); =>Phella yeh line thi...

        reject("could not do it");
    }
})

// produce / matlb create kia....



// consume 
// how to consume 

// Promise are in Micro task queue
friedRicePromise.then(
    // jab promise resolve hoga 
    // Iss bracket ma jo value likhi hai uska matlb hai jo promise honna ka bdd value jo ahey ge....
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    // jb Promise reject ho ga
    ).catch(
    (error)=>{
        console.log(error)
    })


setTimeout(()=>{
    console.log("hello from settimeout")
},0)

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")