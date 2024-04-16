// function returning function 

function myFunc(){
    // function hello(){
    //     return "hello world"
    // }
    // return hello;
    return ()=>{
        return "Hello World";
    }
}

const ans = myFunc();
console.log(ans());


// function are accept and return both functionality perform in one code this is called higher order function:


