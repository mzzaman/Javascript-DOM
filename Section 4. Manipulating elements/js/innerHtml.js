// Javascript innerHTML;

// Reading the innerHTML property of an element;

// 1) Simple JavaScript innerHTML example
let menu2 = document.getElementById("innerHTML");
console.log(menu2.innerHTML);

// 2) Examining the current HTML source

let li = document.createElement("li");
li.textContent = "About Us";
menu2.appendChild(li);
console.log(menu2.innerHTML);
