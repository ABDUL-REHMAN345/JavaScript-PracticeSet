// Add new HTML elements to page 


// innerHTML to add html element

const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML)

// Add New List
// todoList.innerHTML=todoList.innerHTML + "<li> New Todo</li>"

// todoList.innerHTML = "<li>New Todo 2 </li>" => ye km apkr skty hain ager apny pura innerHTML change krna hai tho
// todoList.innerHTML += "<li>New Todo </li>";  /**todoList.innerHTML = todoList.innerHTML + "<li>New Todo</li>";*/ /**=> Both lines are same jessy be krna chahta hai kr skty hai apki marzi hai */

// todoList.innerHTML += "<li>teach students </li>";



// when you should use it

// todoList.innerHTML = "<li>New Todo 2 </li>" => ye km apkr skty hain ager apny pura innerHTML change krna hai tho


// ,when you should not

// todoList.insertAdjacentElement("afterbegin", '<li>Hi</li>') => yeh line next topic ki hai iss topic ka related ni hai