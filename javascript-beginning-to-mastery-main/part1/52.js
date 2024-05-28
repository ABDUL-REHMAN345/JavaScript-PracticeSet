// rest parameters 

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);


// Sarry Number ka sum krna hai apny essa function bnahen with rest operation

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(4,5,4,2,10);
console.log(ans);

// practice:
// function var1(...arr){
// let total=0;
// for(let num of arr){
// total=total+num;
// }
// return total;
// }
// console.log(var1(1,2,3,4,5));