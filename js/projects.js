// Add an event listener to the button to open the URL in a new tab
const btn1 = document.getElementById("btn1"); // ensure your button has id="btn1"

if (btn1) {
  btn1.addEventListener("click", () => {
    window.open("https://github.com/orgs/awoo-co/repositories", "_blank", "noopener,noreferrer");
  });
}
