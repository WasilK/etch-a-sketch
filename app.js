let container = document.querySelector(".container");
let btn = document.querySelector("button");

function createGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    let box = document.createElement("div");
    box.className = "box";
    let squareSize = 960 / size;
    box.style.width = `${squareSize}px`;
    box.style.height = `${squareSize}px`;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

    container.appendChild(box);
  }
}
createGrid(16);

btn.addEventListener("click", () => {
  let q = prompt("Enter a number", 0);
  if (q > 0 && q <= 100) {
    createGrid(q);
  }
});
