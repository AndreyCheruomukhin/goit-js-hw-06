const mainFunction = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const mainBody = document.querySelector("body");
const colorName = document.querySelector(".color");
const mainButton = document.querySelector(".change-color");
mainButton.addEventListener("click", colorChange);
function colorChange(event) {
  colorName.textContent = mainBody.style.backgroundColor = mainFunction();
}
