// STEP 1: Create our product list
const products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Printer"];
console.log("products" ,products);

// STEP 2: Create a featured-products list
// slice() copies part of the original Array
const featuredProducts = products.slice(0,1);

// STEP 3: Display featured products
console.log("Featured products:", featuredProducts);

// STEP 4: Remove Keyboard from the original list
products.splice(1,2);

// STEP 5: Display the updated product list
console.log("Updated products:", products);
