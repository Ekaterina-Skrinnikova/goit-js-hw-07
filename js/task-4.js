const form = document.querySelector(".login-form");

function submitHandler(event) {
  event.preventDefault();
  if (event.target.email.value !== "" && event.target.password.value !== "") {
    const data = {
      email: event.target.email.value.trim(),
      password: event.target.password.value.trim(),
    };

    console.log(data);
  } else {
    alert("All form fields must be filled in");
  }
}

form.addEventListener("submit", submitHandler);
