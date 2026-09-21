// ========================================
// STUDENT DATA MANAGER
// ========================================


// 1. Show every student         → forEach()
// 2. Create student names       → map()
// 3. Find passed students       → filter()
// 4. Find one student           → find()
// 5. Check if someone failed    → some()
// 6. Check if everyone passed   → every()
// 7. Calculate total score      → reduce()
// 8. Calculate average score


// STEP 1: Create student data
const students = [
    { name: "Ali", score: 85 },
    { name: "Ahmed", score: 45 },
    { name: "Hassan", score: 72 },
    { name: "Fatima", score: 90 },
    { name: "Asha", score: 38 }
];

// STEP 2: Show every student
// forEach()
console.log("=== ALL STUDENTS ===");
students.forEach((student , index)=>{
    
    console.log(`${index +1}. ${student.name} - ${student.score}`);
})

// STEP 3: Create an Array of student names
// map()  
console.log("=== ALL STUDENT NAMES ===");  
const studentName = students.map((student)=>{
    return student.name
})
console.log("Studenta Name: ", studentName);

// STEP 4: Get students who passed
// filter()
// Pass mark = 50
console.log("=== ALL PASSED STUDENTS ===");
const passedStudents = students.filter((student)=>{
    return student.score >=50;
})
console.log("Passed students: ",passedStudents);

// STEP 5: Find one student
// find()
console.log("=== FOUND STUDENT ===");
const foundStudent = students.find((student)=>{
    return student.name === "Hassan"
})
console.log("foundStudent:", foundStudent)

// STEP 6: Check if someone failed
// some()
console.log("=== FAILED STUDENT ===");
const failedStudent = students.some((student)=>{
    return student.score < 50;
})
console.log("Failed Student: ",failedStudent)

// STEP 7: Check if everyone passed
// every()
console.log("=== PASSED STUDENTS ===");
const PassedStudents = students.every((student)=>{
    return student.score >= 50;
})
console.log("Passed Students: ",passedStudents)

// STEP 8: Calculate total score
// reduce()
console.log("=== TOTAL STUDENT SCORES ===");
const totalStudenScores = students.reduce((total , student)=>{
 return total + student.score
},0)
console.log("totalStudentScores:",totalStudenScores);

console.log("=== AVERAGE STUDENT ===");
// STEP 9: Calculate average score
const average = totalStudenScores / students.length
console.log("Student average: ", average);
