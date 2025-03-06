// css helper function;

function css(ele, styles) {
  for (const property in styles) {
    ele.style[property] = styles[property];
  }
}

let section = document.querySelector("section");
css(section, {
  marginBlockEnd: "32px",
});

let content = document.querySelector("#content");
css(content, {
  background: "yellow",
  border: "solid 1px red",
  display: "inline",
  color: "teal",
  padding: "18px",
  fontWeight: "bold",
});

// JavaScript getComputedStyle() Method
let message = document.querySelector(".message");
let style = getComputedStyle(message);

console.log("color:", style.color);
console.log("background color:", style.backgroundColor);

let bigFirstLetter = document.querySelector("#main");
css(bigFirstLetter, { color: "teal", fontSize: "21px" });
let mainStyle = getComputedStyle(bigFirstLetter, "::first-letter");
console.log(mainStyle.fontSize);
let tealColor = getComputedStyle(bigFirstLetter, "color");
let fontSize = getComputedStyle(bigFirstLetter, "fontSize");
console.log(tealColor.color);
console.log(fontSize.fontSize);

// JavaScript className;

let menu = document.querySelector("#menu");
css(menu, { listStyle: "none", cursor: "pointer" });
menu.classList += " newClass";
// console.log(menu.classList);

const note = document.querySelector("#note");
// console.log(note.classList);

// Javascript classList;

let div = document.querySelector("#classList");

for (let cssClass of div.classList) {
  console.log(cssClass);
}
console.log(".....Added More Classes.....");

// added more classes
div.classList.add("info", "visible", "block");
for (let cssClass of div.classList) {
  console.log(cssClass);
}

// Remove Class
div.classList.remove("visible");

// Replace Class
div.classList.replace("info", "warning");

// check if an element has a specific class;
div.classList.contains("warning");

// Toggle a class

div.classList.toggle("visible");

// Width and Height of an Element;

let box = document.querySelector(".box");
let width = box.offsetWidth;
let height = box.offsetHeight;
console.log({ width, height });

let cwidth = box.clientWidth;
let cheight = box.clientHeight;
console.log({ cwidth, cheight });

const domRect = box.getBoundingClientRect();
console.log(domRect);

let boxStyle = getComputedStyle(box);
let marginLeft = parseInt(style.marginLeft);
console.log(marginLeft);

let marginRight = parseInt(style.marginRight);
console.log(marginRight);

let marginBottom = parseInt(style.marginBottom);
console.log(marginBottom);

let marginTop = parseInt(style.marginTop);
console.log(marginTop);

// get border;
console.log("get border");

let borderTopWidth = parseInt(style.borderTopWidth) || 0;
console.log(borderTopWidth);

let borderBottomWidth = parseInt(style.borderBottomWidth) || 0;
console.log(borderBottomWidth);

let borderLeftWidth = parseInt(style.borderLeftWidth);
console.log(borderLeftWidth);

let borderRightWidth = parseInt(style.borderRightWidth);
console.log(borderRightWidth);
