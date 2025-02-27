// JavaScript setAttribute() Method;
const btnSend = document.getElementById("btnSend");
if (btnSend) {
  btnSend.setAttribute("name", "send");
  console.log(btnSend);

  btnSend.setAttribute("disable", "");
  console.log(btnSend);
}
