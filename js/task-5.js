const buttonClick = document.querySelector(".change-color");
const spanTextColor = document.querySelector(".color");

buttonClick.addEventListener("click", colorChangeBody);

function colorChangeBody(event) {
  const colorBackgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = colorBackgroundColor;
  spanTextColor.textContent = colorBackgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
