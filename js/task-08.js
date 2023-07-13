const mainForm = document.querySelector(".login-form");
const mainImput = document.querySelector("input");
const mainInputButton = document.querySelector("button");
mainForm.addEventListener("submit", mainFormSubmit);
function mainFormSubmit(event) {
  event.preventDefault();
  const email = mainForm.email.value;
  const password = mainForm.password.value;
  if (email === "" || password === "") {
    alert("Всі рядки повинні бути заповнені");
  } else {
    const { email, password } = event.currentTarget.elements;
    const inputData = {
      email: email.value,
      password: password.value,
    };
    console.log(inputData);
    mainForm.reset();
  }
}
