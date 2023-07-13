const textInput = document.querySelector("#validation-input");
const dataLength = Number(textInput.dataset.length);
textInput.addEventListener("blur", (event) => {
  if (textInput.value.length === dataLength) {
    textInput.classList.add("valid"), textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid"), textInput.classList.remove("valid");
  }
});
