const form = document.querySelector(".login-form");

function submitHandler(event) {
  event.preventDefault();
  if (
    event.target.email.value.trim() === "" &&
    event.target.password.value.trim() === ""
  ) {
    return alert("All form fields must be filled in");
  }
  const data = {
    email: event.target.email.value,
    password: event.target.password.value,
  };

  console.log(data);
  form.reset();
}

form.addEventListener("submit", submitHandler);
