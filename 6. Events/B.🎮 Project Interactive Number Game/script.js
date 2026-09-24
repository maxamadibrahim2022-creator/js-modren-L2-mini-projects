// ========================================
// INTERACTIVE NUMBER GAME
// ========================================

// STEP 1: Find the HTML elements
const guessInput = document.querySelector("#guessInput");

const guessButton = document.querySelector("#guessButton");

const message = document.querySelector("#message");

// STEP 2: Create the secret number
// const secretNumber = Math.floor(Math.random() *10)+1;
const secretNumber = 7;

// STEP 3: Listen for the "input" event
guessInput.addEventListener("input", () => {
  // Get the current input value
  console.log("User is typing:", guessInput.value);

  // STEP 5: Convert input value to a Number
  const userGuess = Number(guessInput.value);

  // STEP 6: Check the user's guess
  if (userGuess === secretNumber) {
    // STEP 7: Show success message
    // message.textContent = `
    // 🎉 Correct! You guessed the number!.
    //  User guess is: ${userGuess}.
    //  The secretNumber is: ${secretNumber}`;
    // message.style.color = "green";

    message.innerHTML = `
    🎉 <strong>Correct!</strong><br>
    You guessed the number!<br><br>
    👤 Your guess: <strong>${userGuess}</strong><br>
    🔐 Secret number: <strong>${secretNumber}</strong>
`;

    // Dynamic CSS
    message.style.color = "#166534";
    message.style.backgroundColor = "#dcfce7";
    message.style.border = "1px solid #86efac";
    message.style.padding = "15px";
    message.style.borderRadius = "10px";
    message.style.marginTop = "15px";
    message.style.fontSize = "16px";
    message.style.lineHeight = "1.6";
    message.style.fontFamily = "Arial, sans-serif";
  } else {
    message.innerHTML = `
    <strong>❌ Wrong! Try again.</strong><br>
    👤 Your guess: <strong>${userGuess}</strong><br>
    🔐 Secret number: <strong>${secretNumber}</strong>

    `;
    // Dynamic CSS
    message.style.color = "red";
    message.style.backgroundColor = "#e09090";
    message.style.border = "1px solid #e67b74";
    message.style.padding = "15px";
    message.style.borderRadius = "10px";
    message.style.marginTop = "15px";
    message.style.fontSize = "16px";
    message.style.lineHeight = "1.6";
    message.style.fontFamily = "Arial, sans-serif";
  }
});

// STEP 9: Listen for the "keydown" event
guessInput.addEventListener("keydown", (event) => {
  // STEP 10: Check if user pressed Enter
  if (event.key === "Enter") {
    console.log(event.value);

    // STEP 11: Run the same action as the button
    guessButton.click();
  }
});
