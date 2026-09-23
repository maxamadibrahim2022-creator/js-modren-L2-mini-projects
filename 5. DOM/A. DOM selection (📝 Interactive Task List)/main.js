// ========================================
// DOM ELEMENT FINDER
// ========================================

// STEP 1: Find the element by ID
const title = document.getElementById("title");

// STEP 2: Find the first element with class "student"
const firstStudent = document.querySelector(".student");

// STEP 3: Find all elements with class "student"
const allStudents = document.querySelectorAll(".student");

// STEP 4: Display the elements in the console
console.log("Title:", title);

console.log("First student:", firstStudent);

console.log("All students:", allStudents);