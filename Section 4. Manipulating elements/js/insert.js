// Javascript InsertAfter
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const insertMenu = document.getElementById("insert-menu");

let createLi = document.createElement("li");
createLi.textContent = "Contact";

// insert a new node after the last list item;

insertAfter(createLi, insertMenu.lastElementChild);

//  avaScript insertBefore;

function insertBefore(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode);
}

let createLI = document.createElement("li");
createLI.textContent = "Home";

insertBefore(createLI, insertMenu.firstElementChild);
