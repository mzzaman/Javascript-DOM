// Understanding Relationships Between HTML Attributes & DOM Object’s Properties;

let input = document.querySelector("#username");
for (let attr of input.attributes) {
  console.log(`${attr.name} = ${attr.value}`);
}

// attribute -> property
input.setAttribute("tabindex", 2);
console.log(input.tabIndex); // 2

// property -> attribute
input.tabIndex = 3;
console.log(input.getAttribute("tabIndex")); // 3

// attribute -> property: OK
input.setAttribute("value", "Devil");
console.log(input.value); // guest
input.textContent = input.value;

// property -> attribute: doesn't change
// input.value = "admin";
console.log(input.getAttribute("value")); // guest

let checkbox = document.querySelector("#checkbox");
console.log(checkbox.checked); // true

let password = document.querySelector("#password");

let styleAttr = password.getAttribute("style");
console.log(styleAttr);

console.dir(input.style);

let bar = document.querySelector("#main");
console.log(bar.dataset);
