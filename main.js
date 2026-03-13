import { increment, reset } from "./counter.js";

// --- Counter ---
const countDisplay = document.getElementById("count-display");

document.getElementById("btn-increment").addEventListener("click", () => {
    countDisplay.textContent = increment();
});

document.getElementById("btn-reset").addEventListener("click", () => {
    countDisplay.textContent = reset();
});

// --- Form Validation ---
const form = document.getElementById("my-form");
const nameInput = document.getElementById("name-input");
const inputError = document.getElementById("input-error");
const welcomeMessage = document.getElementById("welcome-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = nameInput.value.trim();

    if (value.length >= 3) {
        // Valid input
        inputError.style.display = "none";
        inputError.textContent = "";
        welcomeMessage.textContent = `Welcome, ${value}!`;
        nameInput.value = "";
    } 
    else {
        // Invalid input
        inputError.textContent = "Input must be at least 3 characters.";
        inputError.style.display = "block";
        welcomeMessage.textContent = "";
    }
});
