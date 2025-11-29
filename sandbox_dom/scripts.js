const container = document.querySelector("#container");
const button = document.querySelector("#btn");
const bestBtn = document.querySelector("#best-btn");

bestBtn.addEventListener("click", () => {
  alert("I'm the best Nigger");
});

bestBtn.addEventListener("click", (e) => {
  console.log(e.target);
  e.target.style.backgroundColor = "pink";
})

button.onclick = () => alert("Niggers");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the GLORIOUS Niggalution";

const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red!";

const blueHeader = document.createElement("h3");
blueHeader.style.color = "blue";
blueHeader.textContent = "I'm a blue nigger!"

const blackPinkDiv = document.createElement("div");
blackPinkDiv.style.cssText = "border: 3px solid black; background-color: pink;"

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";

const par = document.createElement("p");
par.textContent = "Me too!";

container.appendChild(content);
container.appendChild(redParagraph);
container.appendChild(blueHeader);
container.appendChild(blackPinkDiv);

blackPinkDiv.appendChild(h1);
blackPinkDiv.appendChild(par);