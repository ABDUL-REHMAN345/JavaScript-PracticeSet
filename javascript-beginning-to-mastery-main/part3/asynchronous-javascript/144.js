// async await

// fetch(URL)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     })
console.log("script start");
const URL = "https://jsonplaceholder.typicode.com/posts";

// Jb be kissi function ka sath async likho gy tho wo normal function ni rahy ga wo function special bn jhy ga matlb promise return krey ga hamen....
// Phella hum fetch ka sath .then() lgatta tha abb jb "await" use kro gy tho phr "async" lgao gy ".then()" method ki jagah...

// async function getPosts(){

//     const response = await fetch(URL); =>yeh await yeh sath fetch walla promise hai uska resolve yeh reject honna ka wait krey ga jb tk yeh resolve ho ga yeh reject ho ga jo be hoga uska bdd phr km start hoga agey....

//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//     const data = await response.json(); => yeh hamen promise return krey ga...
//     return data;
// }


const getPosts = async() =>{
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const data = await response.json();
    return data;
}

// const myData = getPosts(); => yeh hamen promise return krey ga iss ka ilaj hai wo neecha code ma likha hai... .then() method lga doh
// console.log(myData);

getPosts()
    .then((myData) => {
        console.log(myData);
    })
    .catch(error =>{
        console.log("inside catch")
        console.log(error);
    })


console.log("script end ");


// yeh "await" yeh km krey ga yeh "wait" krey ga jessa ka naam sy patta lg rahha hai tb tk "wait" krey ga jb tkk "await" walla resolve ni hotta kmm matlb jiss ka sath "await" lgayeh hai wo km resolve ni hotta.... yeh hamen aik value dy ga yeh hamen patta hai iss lye hum na is ko aik variable ma store kr dia hai jessy ka neecha ap dekh skty ho....

// jb "async" hum use krta hai tho wo km browser lyga background ma khud krta hai wo kmm....