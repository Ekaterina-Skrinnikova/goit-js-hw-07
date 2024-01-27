const nameEl = document.querySelector("#name-input");

const spanEl = document.querySelector("#name-output");

function inputHandler(event) {
  if (event.target.value.trim() === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = event.target.value;
  }
}

nameEl.addEventListener("input", inputHandler);
