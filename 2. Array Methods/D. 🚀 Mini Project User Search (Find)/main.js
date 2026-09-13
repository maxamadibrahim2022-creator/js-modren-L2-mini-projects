// ========================================
// USER SEARCH
// ========================================

// STEP 1: Create a list of users
const users = [
    {
        id: 1,
        name: "Ali",
        email: "ali@example.com"
    },
    {
        id: 2,
        name: "Ahmed",
        email: "ahmed@example.com"
    },
    {
        id: 3,
        name: "Hassan",
        email: "hassan@example.com"
    }
];

// STEP 2: Choose the ID we want to search for
const searchId = Number(prompt("Enter the Id 1 - 3"));

// STEP 3: Find the first user with this ID
const user = users.find((user)=>{
    return user.id === searchId;
})

 // STEP 4: Check whether the user was found
 if(user){
    // STEP 5: Display the user's information
    console.log("User found:", user);
 }else{
    // STEP 6: Handle the case where no user exists
    console.log("User not found")
 }

