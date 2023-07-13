let counterValue = 0;
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
buttonDecrement.addEventListener("click", buttonDectementClick);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
buttonIncrement.addEventListener("click", buttonIncrementClick);
const counterElement = document.querySelector("#value");
function buttonDectementClick() {
  counterValue -= 1;
  counterElement.textContent = counterValue;
}
function buttonIncrementClick() {
  counterValue += 1;
  counterElement.textContent = counterValue;
}
