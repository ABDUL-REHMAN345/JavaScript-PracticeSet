const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");
function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor;
}

mainButton.addEventListener("click",()=>{
    const randomColor2 = randomColorGenerator();
    // body.style.backgroundColor=randomColor;
    // console.log(randomColor2)
    body.style.backgroundColor = randomColor2;
    currentColor.textContent = randomColor2;
})