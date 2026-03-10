// ======================================
// Personal Information Variables
// ======================================

const firstName = "David";
const lastName = "Harutyunyan";
const birthYear = 1999;
let currentYear = 2026;
let isStudent = false;
let hobbies = ["Ping Pong", "Video Games", "Play Music"];

const contact = {
    email: "dharoutyunyan@gmail.com",
    phone: +37494422616,
    city: "Yerevan"
};


// ======================================
// Personal Information Output
// ======================================

console.log(`Hi, my name is ${firstName} ${lastName}. I live in ${contact.city}`);


// ======================================
// Type Coercion & Comparison
// ======================================

let ageString = "25";
let ageNumber = 25;

console.log(ageString == ageNumber);
console.log(ageString === ageNumber);
console.log(typeof(ageNumber));
console.log(typeof(ageString));


// ======================================
// Grade Calculation (if...else)
// ======================================

let score = 100;

if (score <= 100 && score >= 90) {
    console.log("A");
}
else if (score >= 80 && score <= 89) {
    console.log("B");
}
else if(score >=70 && score <=79){
    console.log("C");
}
else if(score >=60 && score <=69){
    console.log("D")
}
else if(score < 60){
    console.log("below 60");
}


// ======================================
// Grade Message (switch statement)
// ======================================

let grade = 'A';

switch (grade) {
    case 'A':
        console.log('Excellent Work!')
        break;
    case 'B':
        console.log("Good Job!")
        break;
    case 'C':
        console.log('Keep Improving.')
        break;
    case 'D':
        console.log('Try harder.')
        break;
    case 'F':
        console.log('Needs serious effort.');
}


// ======================================
// Pass / Fail Check (Ternary Operator)
// ======================================

let rating = (grade == 'A') ? "You Passed." : "You failed"; 
console.log(rating);