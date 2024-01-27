const inputNumber = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const container = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  if (Number(inputNumber.value) >= 1 && Number(inputNumber.value) <= 100) {
    createBoxes(Number(inputNumber.value));
  } else {
    alert("Enter a value between 1 and 100");
  }
});

buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let sizeStart = 30;
  let divArr = [];
  for (let i = 0; i < amount; i += 1) {
    sizeStart += 10;
    const div = `<div class="box" style="display: block; margin-right: 30px; margin-bottom: 30px; background-color: ${getRandomHexColor()}; width: ${sizeStart}px; height: ${sizeStart}px;"></div>`;
    divArr.push(div);
  }
  container.insertAdjacentHTML("beforeend", divArr.join(""));
  inputNumber.value = "";
}

function destroyBoxes() {
  container.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
