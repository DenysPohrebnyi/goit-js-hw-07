const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener("click", handleclick);

function handleclick() {
  span.innerHTML = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor()
}
