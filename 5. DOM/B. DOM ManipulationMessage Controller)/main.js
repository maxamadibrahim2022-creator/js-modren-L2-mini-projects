// ========================================
// DOM MESSAGE CONTROLLER
// ========================================

// STEP 1: Find the elements
const title = document.querySelector("#title");
const massage = document.querySelector("#massage");
const button = document.querySelector("#button");
const body = document.querySelector("body");

// STEP 1: Find the elements
title.textContent = "Student Dashboard";

// STEP 3: Change the HTML inside the message
massage.innerHTML =  "<strong>Welcome to your dashboard!</strong>";

// STEP 4: Change the title style
title.style.color = "blue";
title.style.fontSize = "40px";

// STEP 5: Change the message style
massage.style.backgroundColor = "lightgray";
massage.style.padding = "20px";

// STEP 6: Change the button text
button.textContent = "Dashboard Ready";
button.style.marginTop = "20px"

body.style.margin = "0"