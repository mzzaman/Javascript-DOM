// JavaScript getAttribute() Method;

const googleLink = document.getElementById("js");
if (googleLink) {
  let href = googleLink.getAttribute("href");
  console.log(href);
  let target = googleLink.getAttribute("target");
  console.log(target);
  let id = googleLink.getAttribute("id");
  console.log(id);
}
