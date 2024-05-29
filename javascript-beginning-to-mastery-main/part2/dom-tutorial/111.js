// DOM Traversing:

const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes); NodeList(3) [head, text, body]
const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.childNodes);

// sibling relation and Parent Node:
// const h1 = document.querySelector("h1");

// const body = h1.parentNode.parentNode; // iss trah chain be bna skty hain

// const body = h1.sibLingNode;
// const body = h1.sibLingElementNode;

// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"

// Direct iss trah ap kissi be element node ko target/select kr skty hain...
// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"

// const head = document.querySelector("head");
// // console.log(head);

//kissi be element mean HTML elements py head body title py (querySelector) lga skty hain lazami ni document py lgao sirf:

// const title = head.querySelector("title");
// console.log(title.childNodes);

// children
const container = document.querySelector(".container");
console.log(container.children);