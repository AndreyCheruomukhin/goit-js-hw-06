const inputControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
inputControl.addEventListener("input", textEvolution);
function textEvolution(event) {
  text.style.fontSize = `${inputControl.value}px`;
}
