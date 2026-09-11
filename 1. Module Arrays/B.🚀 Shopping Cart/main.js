// 🚀 Real-World Example: Shopping Cart
    // This is where these methods become useful.
    // Imagine an online shopping cart.


    // this project we using only Push And Pop Methods

// STEP 1: Create an empty shopping cart
const cart = [];
// STEP 2: Add the first product
cart.push("laptop");
// STEP 3: Add another product
cart.push("mouse");
// STEP 4: Add another product
cart.push("keyboard");

console.log(cart);
console.log("==========================");


// STEP 5: Remove the last product
const removedItem = cart.pop();

// STEP 6: Tell the user what was removed
console.log("removed: ", removedItem);
console.log("==========================");

// STEP 7: Show the current cart
console.log(cart)