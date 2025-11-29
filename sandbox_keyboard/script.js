const input = document.querySelector("input");
const output = document.querySelector(".output")

window.addEventListener("keydown", (e) => {
  output.textContent += e.key;
})