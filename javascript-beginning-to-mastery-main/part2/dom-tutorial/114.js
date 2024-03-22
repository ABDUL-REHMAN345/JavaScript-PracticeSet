//New Element ko add krna ka shi way hr developer is ko use krta hai

// document.createElement()
// append / append Child => Both are same but appendChild is old....(yeh end ma add krta hai jo be add krna ho wo cheez)

// prepend => yeh starting ma add krr dy ga element...

// remove

// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach students");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);
// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1)

// before 
// after

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem);



// practice

// const createtodo=document.createElement("li");
// const createtodo1=document.createTextNode("New Text");
// const Itemslist=document.querySelector(".todo-list")

// append:Add end element in browser
// // createtodo.append(createtodo1);

// prepand:Add start element in browser
// // createtodo.prepend(createtodo1);

// // Itemslist.append(createtodo);
// // Itemslist.prepend(createtodo);

// console.log(createtodo);

// remove:Add remove element in browser

// const list=document.querySelector(".todo-list li");
// const ans=list.remove();
// console.log(ans);

// before:

// const createtodo=document.createElement("li");
// createtodo.textContent="New tech"
// const Itemslist=document.querySelector(".todo-list")
// Itemslist.before(createtodo);

// after:

const createtodo=document.createElement("li");
createtodo.textContent="Developer"
const Itemslist=document.querySelector(".todo-list")
Itemslist.after(createtodo);