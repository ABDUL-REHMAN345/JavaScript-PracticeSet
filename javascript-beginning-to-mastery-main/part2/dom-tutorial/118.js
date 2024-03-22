// static list vs live list

// querySelectorAll hamen Static List degi
// getElementsBysomething hamen Live List degi








const ul = document.querySelector(".todo-list li");
// const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

// const ul=document.querySelector(".todo-list");

ul.append(sixthLi);
console.log(listItems);