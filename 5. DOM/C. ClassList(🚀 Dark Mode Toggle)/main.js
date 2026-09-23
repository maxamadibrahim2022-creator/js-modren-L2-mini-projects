// ========================================
// DARK MODE TOGGLE
// ========================================

// STEP 1: Find the elements
const button = document.querySelector("#themeButton");

// STEP 2: When the button is clicked
button.addEventListener("click",()=>{
   

    // STEP 3: Toggle the "dark" class
    document.body.classList.toggle("dark");

    // STEP 4: Check whether dark mode is active
    const darkModeIsActive = document.body.classList.contains("dark");

    // STEP 5: Change the button text
    if(darkModeIsActive){
        button.textContent = "Light Mode";

    }else {
        button.textContent = "Dark Mode";
    }
});