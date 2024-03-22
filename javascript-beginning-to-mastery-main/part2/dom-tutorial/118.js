// static list vs live list

// querySelectorAll hamen Static List degi
// getElementsBysomething hamen Live List degi



// video ka start ma phella yeh line likhi thi jb getElementByClassName walla km aayeh tho phr change howi yeh line:

// const ListItems = document.querySelectorALL(".todo-list li");




const ul = document.querySelector(".todo-list li");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

// const ul=document.querySelector(".todo-list");

ul.append(sixthLi);
console.log(listItems);