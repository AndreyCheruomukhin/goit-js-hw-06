const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const markup = ingredients.map(elem => {
  const li = document.createElement('li');
  li.textContent = elem;
  li.classList.add("item");
  return li;
});
const mainList = document.querySelector('ul');
mainList.append(...markup);
