const listEl = document.querySelector("ul");
const titleEl = document.querySelectorAll('h2');

console.log(`Number of categories: ${listEl.children.length}`);

titleEl.forEach((title) => {
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${title.nextElementSibling.children.length}`);
});
