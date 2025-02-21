// TODO: JavaScript after() Method;

//  Introduction to the javaScript after() method;

// JavaScript after() examples

// 1) Using JavaScript after() to insert a node after an element;

const h12 = document.querySelector("#after");

// create a new Paragraph;
const p2 = document.createElement("p");
p2.textContent = "This is JavaScript DOM after() method";

// insert the paragraph after the heading;
console.log(h1.lastElementChild);

h12.after(p2);

// 2) Using JavaScript after() to insert multiple nodes after an element;
const ul2 = document.querySelector("#after-list");

const libs = ["React", "Meteor", "Polymer"];

const items2 = libs.map((lib) => {
  const li = document.createElement("li");
  li.textContent = lib;
  return li;
});

ul2.lastChild.after(...items2);

// 3) Using JavaScript after() to insert strings;

const afterBtn = document.querySelector("#after-btn");
afterBtn.firstChild.after(" 🧡");
