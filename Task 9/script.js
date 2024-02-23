let emailForm = document.getElementById("emailForm");
let emailInput = document.getElementById("email");

emailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (emailInput.value.trim() === "") {
        alert("Please enter an email address");
    } else {
        alert("Form submitted successfully!");
    }
});