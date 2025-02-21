// Introduction to the JavaScript appendChild() method;

function createMenuItem(name) {
  let li = document.createElement("li");
  li.textContent = name;
  return li;
}

// get menu;
const fmenu = document.getElementById("first-menu");
fmenu.appendChild(createMenuItem("Home"));
fmenu.appendChild(createMenuItem("Services"));
fmenu.appendChild(createMenuItem("Contact Us"));
fmenu.appendChild(createMenuItem("Blog"));

// 2) Moving a node within the document example;

// get the first list
const firstList = document.querySelector("#first-list");
// Take the first child Element;
const everest = firstList.firstElementChild;

// Take the Second list;
const secondList = document.querySelector("#second-list");
// append the everest to the second list;
secondList.appendChild(everest);
