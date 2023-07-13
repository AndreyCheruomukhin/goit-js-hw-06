
const list = document.querySelectorAll("#categories > li.item");
const allElements = list.length;
console.log(`Number of categories: ${allElements}`);

list.forEach( (element) => {
  const categoryName = element.querySelector("h2").textContent;
  const categoryElements = element.querySelectorAll("li").length;
  console.log(`Category : ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
}
);
