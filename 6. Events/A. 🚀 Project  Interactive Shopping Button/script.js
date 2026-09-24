// ========================================
// INTERACTIVE SHOPPING BUTTON
// ========================================


// STEP 1: Find the elements
const message = document.querySelector("#message");

const addButton = document.querySelector("#addButton");

// STEP 2: Listen for a click
addButton.addEventListener("click", ()=>{
    
    // STEP 3: Change the message
   message.textContent = "Product added to cart! 🛒";

    // STEP 4: Change the button text
    addButton.textContent = "Product Added ✓";
    addButton.style.color = "green";
})

    
