// JavaScript cloneNode() Method;
const mainMenu = document.getElementById("clone-menu");
const cloneMenu = mainMenu.cloneNode(true);
cloneMenu.id = "menu-mobile";
document.body.appendChild(cloneMenu);
