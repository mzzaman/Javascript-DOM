// JavaScript textContent;

// Reading textContent from a node;

let note = document.getElementById("note");
console.log(note.textContent);

// textContent vs. innerText
console.log(note.innerText); // hidden node does not display;

// Setting textContent for a node;
note.textContent =
  "Javascript TextContent Changed Using Javascript Dom textContent Property";
