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


const products = [
    {
        name : "laptop",
        price : 200,
        paid : 180
    },
    {
        name : "mouse",
        price : 2.5,
        paid : 2.5
    },
    {
        name : "charge",
        price : 8,
        paid : 5
    }
]

products.forEach((product, index) =>{
    console.log(`${index +1}. ${product.name} : $${product.price} piad : $${product.paid}`)
})