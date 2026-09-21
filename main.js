// const fruits = ["Apple", "Bannana", "mango", "orrenge"];

// // step2: removed fruits
// const removedFruits = fruits.splice(2.3);

// // Step3: display removed fruits
// // step4:Display fruits
// console.log("removedFruits:",removedFruits)

// const removed = fruits.splice(0,0, "badiikh");
// fruits.splice(2,0, "mose", "badiikh");
// console.log("fruits:", fruits)
// console.log("removed:", removed)


// const fruits = ["Apple", "Banana", "Orange","canbe", "qare", "liin"];

// // STEP 1: Go to index 1
// // STEP 2: Remove 1 item
// // STEP 3: Put Mango in its place
// console.log("fruits:", fruits);

//  const removed= fruits.splice(1, 3,);

// console.log("removed:", removed);
// console.log("newFruits:", fruits);

// const students = [
//     "Ali",
//     "Ahmed",
//     "Hassan",
//     "Fatima"
// ];

// // STEP 1: Go through every student
// students.forEach((student, index) => {

//     // STEP 2: Display a numbered student
//     console.log(`${index + 1  }. ${student}`);

// });


// const products = [
//     {
//         name : "laptop",
//         price : 200,
//         paid : 180
//     },
//     {
//         name : "mouse",
//         price : 2.5,
//         paid : 2.5
//     },
//     {
//         name : "charge",
//         price : 8,
//         paid : 5
//     }
// ]

// products.forEach((product, index) =>{
//     console.log(`${index +1}. ${product.name} : $${product.price} piad : $${product.paid}`)
// })

// 2️⃣ map() vs forEach()

// const numbers = [10, 20, 30];

// // STEP 1: Go through every number
// // STEP 2: Multiply each number by 2
// // STEP 3: Create a new Array with the results
// const doubledNumbers = numbers.map((number) => {
//     return number * 2;
// });

// // STEP 4: Display the new Array
// console.log(doubledNumbers);


// {
//     const numbers = [10, 20, 30];

// numbers.forEach((number) => {
//     console.log(number * 2);
// });
// }





// const numbers = [23,13,46,65,22];

// // STEP 1: Go through every number
// // STEP 2: Multiply each number by 2
// // STEP 3: Create a new Array with the results

// const doubledNumbers = numbers.map((number, index)=>{
//     return number * 2 ;
// })

// // STEP 4: Display the new Array
// console.log(`${doubledNumbers}`);


// const users = [
//     {
//         name: "Ali",
//         age: 20
//     },
//     {
//         name: "Ahmed",
//         age: 25
//     },
//     {
//         name: "Hassan",
//         age: 30
//     }
// ];

// STEP 1: Go through every user
// STEP 2: Take the name from each user
// STEP 3: Create a new Array containing the names
// const names = users.map((user) => {
//     return user.age;
    
// });

// // STEP 4: Display the new Array
// console.log(names);


// const numbers = [10, 15, 20, 25, 30];

// // STEP 1: Check every number
// // STEP 2: Keep only numbers greater than 20
// // STEP 3: Create a new Array with the matching numbers
// const result = numbers.filter((number) => {
//     return number <= 20;
// });

// // STEP 4: Display the result
// console.log(result);

// const numbers = [10, 15, 20, 25, 30];

// const bigNumbers = numbers.filter((number) => {
//     return number > 20;
// });

// console.log("numbers:",numbers);
// console.log("bigNumbers:", bigNumbers);


// const fruits = [
//     "Apple",
//     "Banana",
//     "Avocado",
//     "Mango"
// ];

// // STEP 1: Check every fruit
// // STEP 2: Keep fruits whose names start with "A"
// const result = fruits.filter((fruit) => {
//     return fruit.endsWith("o");
// });

// console.log(result);


// const users = [
//     {
//         name: "Ali",
//         age: 18
//     },
//     {
//         name: "Ahmed",
//         age: 25
//     },
//     {
//         name: "Hassan",
//         age: 30
//     },
//     {
//         name: "Fatima",
//         age: 16
//     }
// ];

// STEP 1: Check every user
// STEP 2: Keep users whose age is 18 or greater
// const adults = users.filter((user) => {
//     return user.name = 18;
// });

// // STEP 3: Display the matching users
// console.log(adults);


// {
// const prices = [100, 200, 300];

// const discounted = prices.map((price) => {
//     return price * 0.9;
// });

// console.log(discounted)
// }


// const prices = [100, 200, 300];

// // STEP 1: Go through every price
// // STEP 2: Calculate 10% tax
// // STEP 3: Create a new Array with the final prices
// const pricesWithTax = prices.map((price) => {
//     return price * 1.10;
// });

// // STEP 4: Display the new prices
// console.log(pricesWithTax);



// const numbers = [10, 20, 30, 40];

// // STEP 1: Check the numbers one by one
// // STEP 2: Find the first number greater than 20
// const result = numbers.find((number) => {
//     return number > 20;
// });

// // STEP 3: Display the result
// console.log(result);



// const students = [
//     { name: "Ali", score: 85 },
//     { name: "Ahmed", score: 7 },
//     { name: "Hassan", score: 45 }
// ];

// const hasFailedStudent = students.some((student) => {
//     return student.name;
// });

// console.log(hasFailedStudent);


// const numbers =  [10,20,3,40];

// const result = numbers.every((number)=>{
//     return number > 5
// })

// console.log(result);

// const numbers = [10,20,30,40];

// const total = numbers.reduce((sum, number)=>{
//     return sum + number
// }, 0 );

// console.log(total)

const students= [
    {name : "Hassan", score : 50},
    {name : "Ommer", score : 76},
    {name : "fatima", score : 87},
    {name : "Jimcaale", score : 68}
]
// STEP 1: Calculate the total score
const totalScore = students.reduce((sum , student)=>{
    return sum + student.score
}, 0)

// STEP 2: Calculate the average
const average = totalScore / students.length;
console.log("Total: ", totalScore);
console.log("average: ", average);