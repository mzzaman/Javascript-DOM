// TODO: JavaScript innerHTML vs createElement;

// #1) createElement is more performant

let div2 = document.querySelector(".container");
let p = document.createElement("p");
p.textContent = "Js Dom";
div2.appendChild(p);

//  #2) createElement is more secure

for (let i = 0; i < 10; i++) {
  let p = document.createElement("p");
  p.textContent = `Paragraph ${i}`;
  div2.appendChild(p);
}

let fragment2 = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
  let p = document.createElement("p");
  p.textContent = `Paragraph ${i}`;
  fragment2.appendChild(p);
}

// append the fragment to the DOM tree;
div2.appendChild(fragment2);
