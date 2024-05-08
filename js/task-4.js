const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const info = {};
    const elements = event.currentTarget.elements;
    if (elements.email.value === "" || elements.password.value === "") {
        alert(`All form fields must be filled in`);
    } else {
        info.email = elements.email.value;
        info.password = elements.password.value;
    }
    form.reset();
}
