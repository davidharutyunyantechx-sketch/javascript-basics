import { increment, reset } from "./counter.js";

const countDisplay = document.getElementById("count-display");
const incrementButton = document.getElementById("btn-increment");
const resetButton = document.getElementById("btn-reset");

const form = document.getElementById("my-form");
const nameInput = document.getElementById("name-input");
const inputError = document.getElementById("input-error");
const welcomeMessage = document.getElementById("welcome-message");

function setCount(value) {
    countDisplay.textContent = value;
}

function showError(message) {
    inputError.textContent = message;
    inputError.style.display = "block";
}

function clearError() {
    inputError.textContent = "";
    inputError.style.display = "none";
}

function showWelcome(name) {
    welcomeMessage.textContent = `Welcome, ${name}!`;
}

function clearWelcome() {
    welcomeMessage.textContent = "";
}

incrementButton.addEventListener("click", () => {
    setCount(increment());
});

resetButton.addEventListener("click", () => {
    setCount(reset());
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (name.length < 3) {
        showError("Input must be at least 3 characters.");
        clearWelcome();
        return;
    }

    clearError();
    showWelcome(name);
    nameInput.value = "";
});
