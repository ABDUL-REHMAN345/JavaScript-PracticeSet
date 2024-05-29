// this keyword
const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
    console.log("you clicked me !!!!");
    console.log("value of this")
    console.log(this);
});


// ==>  Function Expression "this":

// const btn = function(){
//     console.log(this);
// }

// btn(); /** Window Object */

// ==>  Arrow Function "this":
// const btn = () => {
//     console.log(this);
// }

// btn(); /** Window Object */
