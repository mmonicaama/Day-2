const form = document.getElementById("simpleForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name";
        return;
    }

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email address";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address";
        return;
    }

    alert("Form submitted successfully!");
});