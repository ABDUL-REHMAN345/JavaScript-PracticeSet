// XMLHttpRequest():

// Three Things are imp in this XMLHttpRequest() method:=> 1.response 2.status 3.readyState

// REST(Representational State Transfor) API(Application Programe Interface)=> yeh neecha link ma fake REST API's hotti hai JSON ki...

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);
// step1
// console.log(xhr.readyState); => 0 milla ga

xhr.open("GET", URL);

// console.log(xhr.readyState); => 1 milla ga

// xhr.onreadystatechange = function(){

//     // console.log(xhr.readyState);

//     if(xhr.readyState === 4){
//         console.log(xhr)
//     console.log(xhr.response);

//         const response = xhr.response;

// Convert JSON into JavaScript Object:

//         const data = JSON.parse(response);
//         console.log(typeof data);
//     }
// }

// onload method tb chally ga jb apki readyState complete hoge

xhr.onload = function () {
  const response = xhr.response;
  const data = JSON.parse(response);
  console.log(data);
};

xhr.send();

// side info jo video ma btai ge hai:

// General:jo console ka hotta hai wo btatah hai ka kiss link py request ki kon sa method use kia GET,POST etc.....
// Response Headers:Mean iss ma meta information hotti hai jo server hamen provide krta hai
// Request Headers: Mean hum na cheezain jo hai Request Headers ma wo sath ma bheji hai

// Browser By Default GET Request krta hai
// In JSON file not use methods 
