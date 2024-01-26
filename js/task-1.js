const idCategories = document.querySelector("#categories");

const listCategories = document.querySelectorAll("li.item");

const numberOfcategories = listCategories.length;
console.log("Number of categories:", numberOfcategories);

const titleCategories = document.querySelectorAll("h2");

const textTitleCategories = titleCategories.forEach((titleCategory) => {
  return console.log(
    "Category:",
    titleCategory.textContent,
    "Elements:",
    titleCategory.nextElementSibling.children.length
  );
});
