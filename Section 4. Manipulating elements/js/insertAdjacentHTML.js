// TODO: JavaScript insertAdjacentHTML() Method;

// JavaScript insertAdjacentHTML() method example;

const list = document.getElementById("list");
list.insertAdjacentHTML("beforebegin", "<h1>Web Technology</h1>");
list.insertAdjacentHTML("afterbegin", "<li>HTML</li>");
list.insertAdjacentHTML("beforeend", "<li>Javascript</li>");
list.insertAdjacentHTML("afterend", "<p>For frontend developers</p>");
