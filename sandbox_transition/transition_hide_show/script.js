const divElem = document.querySelector("div");
const htmlElem = document.querySelector(":root");

const showHide = () =>{
  divElem.classList.toggle("showing");
}

htmlElem.addEventListener("click", showHide);
document.addEventListener("keydown", showHide);