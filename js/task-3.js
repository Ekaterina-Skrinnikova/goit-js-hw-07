const nameEl = document.querySelector("#name-input");
// console.log(nameEl);

const spanEl = document.querySelector("#name-output");
// console.log(spanEl.textContent);

function inputHandler(event) {
  if (event.target.value !== null && event.target.value !== " ") {
    spanEl.textContent = event.target.value.trim();
  } else {
    spanEl.textContent = "Anonymous";
  }
}

// const span = spanEl.textContent;
// console.log(span);

nameEl.addEventListener("input", inputHandler);
