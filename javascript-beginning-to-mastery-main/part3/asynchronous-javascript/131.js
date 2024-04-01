// setInterval


// console.log("script start");
// // setInterval(() => {
  // more delay this code toh neecha walli line:
  // let total=0;
  // for(lwt i=0;i<1000000000;i++){
// continue;
// total+=i;
  // }
  // console.log(total);
// //   console.log(Math.random());
// // }, 500);
// console.log("script end");


const body = document.body;
const button = document.querySelector("button");
const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red},${green}, ${blue})`;
  body.style.background = rgb;
}, 1000);

button.addEventListener("click", () => {
  clearInterval(intervalId);
  button.textContent = body.style.background;
});

console.log(intervalId);


// Math.floor Examples: 
console.log(Math.floor(4.9)); // Output: 4
console.log(Math.floor(7.2)); // Output: 7
console.log(Math.floor(-3.5)); // Output: -4
console.log(Math.floor(-2.8)); // Output: -3
console.log(Math.floor(10)); // Output: 10

