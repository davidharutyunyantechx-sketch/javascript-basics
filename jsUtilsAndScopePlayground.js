// ===================================================================
// FUNCTIONS TEST
// ===================================================================

// Function Declaration
function getSum(num1, num2) {
    return num1 + num2; // return sum of numbers
}

// Arrow Function
const maxNumber = (num1, num2) => {
    return num1 >= num2 ? num1 : num2; // return bigger number
};

// Arrow Function
const sumArray = (arr) => {
    let sum = 0;

    for (let num of arr) {
        sum += num; // add numbers in array
    }

    return sum; // return total sum
};

// Function Expression
const checkParity = function (number) {
    if (number % 2 === 0) {
        return "Even"; // number is even
    } else {
        return "Odd"; // number is odd
    }
};

// Function Declaration
function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // build reversed string
    }

    return reversed;
}

// Function Declaration
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false; // not a palindrome
        }
    }
    return true; // palindrome
}

// Function Tests
console.log(getSum(4, 5)); // sum
console.log(checkParity(4)); // even or odd
console.log(reverseString("Jack")); // reversed string
console.log(maxNumber(10, 15)); // bigger number
console.log(isPalindrome("MadaM")); // palindrome check
console.log(sumArray([1, 2, 3, 4])); // sum of array


// ===================================================================
// SCOPE SIMULATION
// ===================================================================

// Global variable (works everywhere)
let globalVar = "I am a global variable";

function myFunction() {

    // Function variable (works only in this function)
    var functionVar = "I am inside the function";

    console.log(globalVar);   // works
    console.log(functionVar); // works

    if (true) {

        // Block variables (work only inside this block)
        let blockLet = "I am block scoped (let)";
        const blockConst = "I am block scoped (const)";

        console.log(globalVar);   // works
        console.log(functionVar); // works
        console.log(blockLet);    // works
        console.log(blockConst);  // works

        // Nested function
        function innerFunction() {

            // inner function can use outer variables
            console.log(globalVar);
            console.log(functionVar);
            console.log(blockLet);
            console.log(blockConst);
        }

        innerFunction(); // run inner function
    }

    console.log(blockLet);
    // error → blockLet only exists inside the if block
}

myFunction();

console.log(globalVar); // works

console.log(functionVar);
// error → functionVar only exists inside myFunction


// ===================================================================
// HOISTING & TDZ
// ===================================================================

// VAR HOISTING
console.log(varVariable);
// undefined → var is moved to top but not assigned yet

var varVariable = "I am a var variable";


// LET HOISTING
console.log(letVariable);
// ReferenceError → let is in TDZ before declaration

let letVariable = "I am a let variable";


// CONST HOISTING
console.log(constVariable);
// ReferenceError → const is also in TDZ

const constVariable = "I am a const variable";


// FUNCTION HOISTING
sayHello(); // works because functions are hoisted

function sayHello() {
    console.log("Hello from hoisted function");
}


// FUNCTION EXPRESSION (NOT HOISTED)
sayHi();
// ReferenceError → function expression is not ready yet

const sayHi = function () {
    console.log("Hello from function expression");
};

