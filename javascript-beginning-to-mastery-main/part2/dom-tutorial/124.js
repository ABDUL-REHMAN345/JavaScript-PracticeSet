
console.log("script start !!!!!")
const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let num = 0;
        for(let i = 0; i<= 1000000000; i++){
            num += i;
        }
        console.log(e.currentTarget.textContent, num);
    })
})

let outerVar = 0;
for(let i = 0; i<= 100000000; i++){
    outerVar += i;
}
console.log("value of outer variable is ", outerVar);
console.log("script end !!!!!")

// JS Engine + WebAPI (Application-Program-Interface)

// "Event loop" jo hai "Btn's" ko stop rakhey ga jbb tkk apka phella walla code run ni hotta tb tk...jo "Btn's" hogy wo "callback queue" ma "event loop" rook ka rakhey ga...