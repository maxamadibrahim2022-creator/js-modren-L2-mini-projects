// Hadda aan isku darno:
    // createElement()
    // appendChild()
    // removeChild()
    // textContent
    // forEach()


// ========================================
// STUDENT LIST MANAGER
// ========================================

// STEP 1: Create student data
const students = [
    "Mohamed",
    "Hassan",
    "Ahmed",
    "Fatima"
];

// STEP 2: Find the container
const studentList = document.querySelector("#studentList");

// STEP 3: Find the remove button
const removeButton = document.querySelector("#removeButton");

// STEP 4: Create an element for every student
students.forEach((student)=>{

    // Create a new paragraph
    const studentElement = document.createElement("p");

    // Put the student name inside the paragraph
    studentElement.textContent = student;

    // Add the paragraph to the student list
    studentList.appendChild(studentElement);
});

// STEP 5: Listen for a button click
removeButton.addEventListener("click",()=>{

    // STEP 6: Check if there is at least one student
    if(studentList.lastElementChild){

        // STEP 7: Remove the last student
        studentList.removeChild(studentList.lastElementChild)
    }else {
        studentList.classList.contains;
        studentList.textContent = "wax latiro malaha";
        studentList.style.color = "red"
    }
})