// TODO: JavaScript replaceChild() Method;

let replaceMenu = document.getElementById("replace-menu");
console.log(replaceMenu);

// Create a new node;
let li3 = document.createElement("li");
li3.textContent = "Home";

// replace the first list item;
replaceMenu.replaceChild(li3, replaceMenu.firstElementChild);
