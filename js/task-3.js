const input = document.querySelector("#name-input");
const title = document.querySelector("#name-output");
input.addEventListener("input", handleInput);

function handleInput(event) {
    const name = event.target.value.trim();
    if (name !== "") {
        title.innerHTML = name;
    } else {title.innerHTML = "Anonymous"}
    
}
