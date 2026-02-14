const f = document.getElementById("foo");
document.addEventListener("click", e => {
  f.style.transform = `translateY(${e.clientY - 25}px)`;
  f.style.transform += ` translateX(${e.clientX - 25}px)`;
});