// ========================================
// PRODUCT MANAGER
// ========================================

// STEP 1: Create products
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
    category: "Electronics",
    stock: 5,
  },

  {
    id: 2,
    name: "Phone",
    price: 500,
    category: "Electronics",
    stock: 10,
  },

  {
    id: 3,
    name: "Headphones",
    price: 100,
    category: "Accessories",
    stock: 20,
  },
];

console.log("=== STEP 2: Destructuring ===");
// STEP 2: Destructuring
// Get information from the first product
const { name, price, category } = products[0];
console.log(`product: ${name} | price: ${price} | category: ${category}`);

console.log("=== STEP 3: Spread ===");
// STEP 3: Spread
// Create a new product from an existing product
const newProduct = {
  ...products[0],
  id: 3,
  name: "Gaming Laptop",
  price: 1200,
};
console.log("New Product: ", newProduct);

console.log("=== STEP 4: Add the new product ===");
// STEP 4: Add the new product
// Create a new Array using spread

const updetedProducts = [...products, newProduct];
console.log("updatedProducts: ", updetedProducts);

console.log("=== STEP 5: Rest ===");
// STEP 5: Rest
// Create a function that accepts many products
function showProducts(...productList) {
  productList.forEach((product) => {
    console.log(`${product.name} - $${product.price}`);
  });
}

console.log("=== STEP 6: Use the Rest function ===");
// STEP 6: Use the Rest function
showProducts(...updetedProducts);

console.log("=== STEP 7: Template Literals ===");
// STEP 7: Template Literals
// Create a product summary
const productSummary = `
Product: ${newProduct.name},
price: ${newProduct.price},
category: ${newProduct.category},
stock: ${newProduct.stock}
`;

console.log(productSummary);


console.log("=== STEP 8: Object Method ===");
// STEP 8: Object Method
// Create a method for product information
const productManager = {
    products: updetedProducts,
    showProduct(product) {
        console.log(`
Name: ${product.name}
Price: $${product.price}
Category: ${product.category}
Stock: ${product.stock}
        `);
    }
};


console.log("=== STEP 9: Show one product ===");
// STEP 9: Show one product
productManager.showProduct(newProduct);