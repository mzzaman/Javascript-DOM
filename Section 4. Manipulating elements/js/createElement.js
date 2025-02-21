// JavaScript CreateElement() Method;

// 1) Creating a new div example;
let div = document.createElement("div");

// Adding an id to the div
div.id = "content";

// Adding a class to the div
div.className = "text-center";

// Adding Content on div element;
div.innerHTML = `<p>Javascript Create Elements Method</p>`;

document.body.appendChild(div);

// Adding text to a div;

let text = document.createTextNode("CreateElement example");
div.appendChild(text);
// console.log(text);

// 2) Creating new list items (li) example;

// select the ul menu element;
const menu = document.querySelector("#create-menu");

// Create product li
let product = document.createElement("li");
product.className = "menu-item";
product.textContent = "Products";
menu.appendChild(product);

// Create about us
let aboutUs = document.createElement("li");
aboutUs.className = "menu-item";
aboutUs.textContent = "About Us";
menu.appendChild(aboutUs);

// 3) Creating a script element example;
let script = document.createElement("script");
script.src = "/lib.js";
document.body.appendChild(script);

function loadJs(url) {
  let script = document.createElement("script");
  script.src = url;
  document.body.appendChild(script);
}
loadJs("/js/lib.js");

//  asynchronous
function loadJsAsync(url) {
  let script = document.createElement("script");
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}
loadJsAsync("/js/libAs.js");
