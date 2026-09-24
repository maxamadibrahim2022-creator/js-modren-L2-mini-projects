// ========================================
// DYNAMIC SHOPPING APP
// ========================================

// STEP 1: Find the HTML elements
const ProductInput = document.querySelector("#ProductInput");

const addButton  = document.querySelector("#addButton");

const productList = document.querySelector("#productList");

// STEP 2: Create an array for products
const products =[
    "Milki",
    "Bread",
    "Eggs"
];

// STEP 3: Create a function that creates one product
function createProduct (productName){

    // CREATE
    // STEP 4: Create a new <li>
   const productItem = document.createElement("li");

    // STEP 5: Give the <li> a class
    productItem.classList.add("product-item");

    // ADD PRODUCT NAME
    // STEP 6: Create a <span>
    const productText = document.createElement("span");

    // STEP 7: Put the product name inside <span>
    productText.textContent = productName;

    // CREATE REMOVE BUTTON
    // STEP 8: Create a button
    const removeButton = document.createElement("button");

    // STEP 9: Add text to the button
    removeButton.textContent = "Remove";

    // STEP 10: Give the button a class
    removeButton.classList.add("remove-button");

    // ATTRIBUTE
    // STEP 11: Give the button a data-product attribute
    removeButton.setAttribute("data-product", productName);

    // APPEND
        // STEP 12: Put the text inside the <li>
        productItem.appendChild(productText);

        // STEP 13: Put the remove button inside the <li
        productItem.appendChild(removeButton);
        
        // STEP 14: Put the <li> inside the <ul>
        productList.appendChild(productItem);

        // REMOVE
        // STEP 15: Listen for a click on Remove
        removeButton.addEventListener("click", ()=>{

            // STEP 16: Read the attribute
            const product = removeButton.getAttribute("data-product");
            console.log("removing: ",product);

            // STEP 17: Remove the product from the page
            productList.removeChild(productItem);

    });
};

// CREATE INITIAL PRODUCTS
// STEP 18: Create every starting product
products.forEach((product)=>{

    createProduct(product);
});

// ADD NEW PRODUCT
// STEP 19: Listen for Add Product button
addButton.addEventListener("click",()=>{

    // STEP 20: Get the input value
    const productName = ProductInput.value.trim();

    // STEP 21: Check if input is empty
    if (productName === ""){

        return
    }

    // STEP 22: Create the new product
    createProduct(productName);

    // STEP 23: Clear the input
    ProductInput.value = "";
});






