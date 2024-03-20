// lexical scope 
const myVar = "value1";

function myApp(){
    

    function myFunc(){
        // const myVar = "value59";
        console.log("hello myFunc")
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();