// JavaScript DocumentFragment;

// Introduction to the Javascript DocumentFragment interface;
let languages = ["JS", "TypeScript", "PHP", "Dart"];

let languageElement = document.getElementById("language");

let fragment = new DocumentFragment();
languages.forEach((language) => {
  let li = document.createElement("li");
  li.innerHTML = language;
  fragment.appendChild(li);
});

languageElement.appendChild(fragment);
