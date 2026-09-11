// 🚀 Project 1 — Shopping List Manager
    // You’re ready. Let’s build, not just study. 💪
        // We’ll use the six Array methods you just learned:
            // push() → add to end
            // pop() → remove from end
            // unshift() → add to beginning
            // shift() → remove from beginning
            // slice() → copy part
            // splice() → remove/replace part


// 🛒 Step 1 — Create the shopping list
console.log("🛒 Step 1 — Create the shopping list");
const shoppingList = ["Milk", "Bread", "Eggs"]
console.log(shoppingList);

// ➕ Step 2 — Add an item to the end
    // Imagine you remember that you need Rice.
    console.log("➕ Step 2 — Add an item to the end");
    shoppingList.push("Rice");
    console.log(shoppingList);

// ➕ Step 3 — Add an important item to the beginning
    // Imagine Water is important and you want it at the beginning.
    console.log("➕ Step 3 — Add an important item to the beginning");
    shoppingList.unshift("Water");
    console.log(shoppingList)

// ❌ Step 4 — Remove the first item
    // You already bought the Water.
    console.log("❌ Step 4 — Remove the first item");
    const firstItem = shoppingList.shift();
    console.log("bought:", firstItem);
    console.log(shoppingList);

// ❌ Step 5 — Remove the last item
    // You decide you don't need Rice anymore.
    console.log("❌ Step 5 — Remove the last item");
    const lastItem = shoppingList.pop();
    console.log("Removed:", lastItem);
    console.log(shoppingList);

// 🔧 Step 6 — Remove a specific item
    // Now suppose you want to remove Bread.
        // Bread is at index 1:
            // Remove 1 item
            console.log("🔧 Step 6 — Remove a specific item");
            const remove = shoppingList.splice(1 , 1);
            console.log("Removed:", remove);
            console.log(shoppingList);

// 👀 Step 7 — View part of the list
    // Suppose you want a copy of the first item without changing the shopping list.
        // Use slice():
        console.log("👀 Step 7 — View part of the list." + 
           " Suppose you want a copy of the first item without changing the shopping list")
        const copyItem = shoppingList.slice(0,1);
        console.log("Selected items:", copyItem);
        


// STEP 8: Display the final information
console.log("Shopping list:", shoppingList);
        