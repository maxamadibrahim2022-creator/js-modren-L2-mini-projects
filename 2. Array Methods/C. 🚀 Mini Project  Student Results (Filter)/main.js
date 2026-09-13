// ========================================
// STUDENT RESULTS
// ========================================


// STEP 1: Create student data
const students = [
    {
        name : "maxamad",
        score : 80
    },
    {
        name : "Xamdi",
        score : 99
    },
    {
        name : "cummar",
        score : 30,
    }
]

// STEP 2: Find students who passed
// A passing score is 50 or higher
const passedStudents = students.filter((student)=>{
    // STEP 3: Check the student's score
    return student.score > 50;
})

    // STEP 4: Display the students who passed
    console.log("Passed students:",passedStudents);