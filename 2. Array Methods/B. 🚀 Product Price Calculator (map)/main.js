// ========================================
// PRODUCT PRICE CALCULATOR
// ========================================

// STEP 1: Create an Array of product prices
const prices =[ 20,30,15,40];

// STEP 2: Add 15% tax to every product
const finalPrices = prices.map((price)=>{
    // STEP 3: Calculate the price including tax
    return price * 1.15;
})
    
// STEP 4: Display the original prices
console.log("Original prices:",prices);

// STEP 5: Display the final prices
console.log("Prices with tax:", finalPrices);