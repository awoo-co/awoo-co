const btn1 = document.getElementById("btn1");

if (btn1) {
  btn1.addEventListener("click", () => {
    window.open("/", "_self");
  });
}
