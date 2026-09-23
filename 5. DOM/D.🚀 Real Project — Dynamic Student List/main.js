// ========================================
// DYNAMIC STUDENT LIST
// ========================================

// STEP 1: Create our student data
const students = [
    "Ali",
    "Ahmed",
    "Hassan",
    "Fatima"
];

// STEP 2: Find the container
const studentList = document.querySelector("#studentList");

// STEP 3: Go through every student
students.forEach((student)=>{

    // STEP 4: Create a new <p> element
    const studentElement = document.createElement("p");

    // STEP 5: Put the student's name inside the <p>
    studentElement.textContent = student;

    // STEP 6: Add the <p> to the container
    studentList.appendChild(studentElement);
})
console.error()