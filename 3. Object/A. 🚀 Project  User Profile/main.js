// 🚀 Project — User Profile
// Now let's build the User Profile project from your roadmap.

    // This project combines:
        // ✅ Objects
        // ✅ Properties
        // ✅ Methods
        // ✅ this
        // ✅ Nested objects

// We'll keep the theory small and focus on the project.
// 🎯 Project Goal

    // We will create a user profile that can:
        // Store user information
        // Store address information
        // Display the profile
        // Update the user's age
        // Display a greeting



// USER PROFILE
// STEP 1: Create the user object
const user ={
    // User properties
    name : "Ali",
    age : 25,
    email : "ali@example.com",

    // Nested object
    address : {
        city : "Mogadishu",
        countery : "Somalia"
    },

    // STEP 2: Create a method
    intriduce(){
        console.log(`Hello, May Name is ${this.name}.`);
    },

    // STEP 3: Create another method
    showProfile(){
        console.log(`Name: ${this.name},`);
        console.log(`Age: ${this.age},`);
        console.log(`email: ${this.email},`);

        console.log(`Location: ${this.address.city}, ${this.address.countery}.`)
    },

    // STEP 4: Create a method to update age
    updateAge(newAge){
        this.age = newAge;
    }
};
// STEP 5: Display the user's introduction
user.intriduce();

// STEP 6: Display the complete profile
console.log("=== SHOW PROFILE ===")
user.showProfile();

// STEP 7: Update the user's age
user.updateAge(26);

// STEP 8: Display the updated profile
console.log("=== AFTER AGE UPDATE ===");
user.showProfile();