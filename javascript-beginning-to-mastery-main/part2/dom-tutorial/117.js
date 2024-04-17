// some old methods to support poor IE(Internet Explorer)
// appendChild;
// insertBefore;
// replaceChild;
// removeChild;
// const ul = document.querySelector(".todo-list");


// appendChild;

// ul.appendChild(li);

// insertBefore:

// const li = document.createElement("li");
// li.textContent = "new todo";
// const referenceNode = document.querySelector(".first-todo");
// ul.insertBefore(li,referenceNode);

// =>>is line ka matlb hai ka "reference Node" => "li" sy phella aa jhy ga


// new element => replaceChild

// const li = document.createElement("li");
// li.textContent = "new todo";
// const referenceNode = document.querySelector(".first-todo");
// ul.replaceChild(li , referenceNode);

// =>>is line ka matlb hai ka "reference Node" ki jagah "li" walla replace ho jhy ga



// removeChild => Baqqi sarra code phella walla mean (replaceChild)walla and phr yeh line jo neecha likhi hai phella code ma "li" line ki zaroorat ni hai ager "li" ko delete krna hai tho phr rakho otherwise rehna doh...

// ul.removeChild(referenceNode);