const buttonClick = document.querySelector(".change-color");
const spanTextColor = document.querySelector(".color");
const bodyEl = document.querySelector("body");

function colorChangeBody(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanTextColor.textContent = getRandomHexColor();
}

buttonClick.addEventListener("click", colorChangeBody);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
