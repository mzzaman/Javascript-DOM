// TODO: JavaScript before() Method;

// Introduction to the JavaScript before() method;

// JavaScript before() examples

const pElement = document.querySelector("p");

// Create a new h1 element;
const h1 = document.createElement("h1");
h1.textContent = "Javascript DOM - before()";

// insert the h1 before the paragraph;
pElement.before(h1);

// 2) Using JavaScript before() to insert multiple nodes before an element;

const ul = document.querySelector("#framework");
let frameWorkLists = ["React", "Meteor", "Polymer"];
const items = frameWorkLists.map((frameWorkList) => {
  const li = document.createElement("li");
  li.textContent = frameWorkList;
  return li;
});
ul.firstChild.before(...items);

// 3) Using JavaScript before() to insert strings;

const button = document.querySelector("button");
button.firstChild.before("🧡 ");
