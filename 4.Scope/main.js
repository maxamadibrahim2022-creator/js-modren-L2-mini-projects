// USER AUTHENTICATION SYSTEM

// STEP 1: Create user information
const userName = "Ali";
const correctPasswer = 12345;

// STEP 2: Create login function
function loginUser(inputUserName, inpuPasswer){

    // These variables belong to the function scope
    const loginMassage = "Login Process startimg";
    console.log(loginMassage)


// STEP 3: Check username and password
if(
    inputUserName === userName && 
    inpuPasswer === correctPasswer
){
    // This variable belongs to the block scope
    const status = "Loging successful";
    console.log(status);

}else{
    // This variable belongs to this block scope
    const status = "Invalid username or password";
    console.log(status);
}
};


// STEP 4: Try to login
loginUser("Ali", "1234");

// STEP 5: Try another login
loginUser("Ahmed", "9999");