// STEP 1: Select all elements
const registrationForm = document.querySelector("#registrationForm");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#ConfirmPassword");
const success = document.querySelector("#success");
const error = document.querySelector("#error");
const inputs = document.querySelectorAll("input");

// Submit Form
registrationForm.addEventListener("submit", function (event) {
  // Prevent page refresh
  event.preventDefault();

  // Clear old messages
  error.textContent = "";
  success.textContent = "";

  // Validate all inputs
  const isUserNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPassword = validateConfirmPassword();

  // Focus on the first invalid input
  if (!isUserNameValid) {
    name.focus();
    return;
  } else if (!isEmailValid) {
    email.focus();
    return;
  } else if (!isPasswordValid) {
    password.focus();
    return;
  } else if (!isConfirmPassword) {
    confirmPassword.focus();
    return;
  }

  // Show success message
  success.textContent = "Registration Successfull!";

  // Clear all form inputs
  registrationForm.reset();

  // Remove validation styles
  inputs.forEach((input) => {
    input.classList.remove("valid", "invalid");
  });
});

// Validations

// Name Validation
function validateName() {
  if (name.value.trim() === "") {
    setError(name, "Name is Required");
    return false;
  } else {
    setSuccess(name);
    return true;
  }
}

// Email Validation
function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.value.match(emailPattern)) {
    setError(email, "Please enter your correct email");
    return false;
  } else {
    setSuccess(email);
    return true;
  }
}

// Password Validation
function validatePassword() {
  if (password.value.length < 8) {
    setError(password, "password must be at least 8 characters");
    return false;
  } else {
    setSuccess(password);
    return true;
  }
}

// Confirm Password Validation
function validateConfirmPassword() {
  if (password.value.trim() === "" || confirmPassword.value.trim() === "") {
    setError(confirmPassword, "Passwords must be mutch!");
    return false;
  }

  if (password.value !== confirmPassword.value) {
    setError(confirmPassword, "Passwords must be mutch!");
    return false;
  } else {
    setSuccess(confirmPassword);
    return true;
  }
}

// Show Error
function setError(element, massege) {
  // Add invalid style
  element.classList.add("invalid");

  // Remove valid style
  element.classList.remove("valid");

  // Show error message
  error.textContent = massege;
}

// Show Success
function setSuccess(element) {
  // Add valid style
  element.classList.add("valid");

  // Remove invalid style
  element.classList.remove("invalid");
}
