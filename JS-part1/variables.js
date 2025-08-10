const accountId1 = 144553; // we use const so that the value cannot be changed afterwards (block scope)
let accountEmail1 = "aman@gmail.com"; // can be reassigned  value but can't be declared again (block scope)
var accountPassword = "12345"; // (global scope) using var can be difficut as whenever new variables are declared using same name inside another block it will change all the variables value with same name
let accountCity1 = "Kolkata";
let accountState1; // after printing this it will show the value undefined as the values was not initialized

// accountId1 = 213  // not allowed
accountEmail1 = "aman@google.com";
accountPassword = "124";
accountCity1 = "Delhi";

//console.log(accountId1);
//console.log(accountEmail1);

/*
Prefer not to use var 
because of issue in block scope and functional block
*/

console.table([accountId1, accountEmail1, accountPassword, accountCity1,accountState1]);
// console.table([group of variables you want to show in tabular form])


// ***********************************************************************************************************
// *************************** Detailed and better explanation ***************************

/**
 * JAVASCRIPT VARIABLES AND SCOPE - COMPREHENSIVE GUIDE
 * ====================================================
 * 
 * This code demonstrates:
 * 1. Different variable declaration keywords (const, let, var)
 * 2. Scope differences and their implications
 * 3. Variable reassignment rules
 * 4. Hoisting behavior
 * 5. Best practices for modern JavaScript
 * 6. Common pitfalls and how to avoid them
 */

"use strict"; // Enable strict mode for better error catching

// =============================================================================
// SECTION 1: VARIABLE DECLARATIONS WITH DIFFERENT KEYWORDS
// =============================================================================

console.log("=".repeat(60));
console.log("JAVASCRIPT VARIABLE DECLARATIONS AND SCOPE");
console.log("=".repeat(60));

/**
 * CONST DECLARATION:
 * 
 * - Block-scoped (only accessible within the block where it's declared)
 * - Cannot be reassigned after initial declaration
 * - Must be initialized at declaration time
 * - Creates immutable binding (the variable itself can't be reassigned)
 * - For objects/arrays, the contents can still be modified
 * 
 * USE CASE: Values that should never change (constants, configuration)
 */
const accountId = 144553;
console.log("✅ CONST Declaration:");
console.log("Account ID:", accountId, "| Type:", typeof accountId);
console.log("Scope: Block-scoped");
console.log("Reassignment: Not allowed");
console.log("Hoisting: Temporal Dead Zone (cannot access before declaration)");

/**
 * LET DECLARATION:
 * 
 * - Block-scoped (only accessible within the block where it's declared)
 * - Can be reassigned but cannot be re-declared in the same scope
 * - Can be declared without initialization (will be undefined)
 * - Subject to Temporal Dead Zone
 * 
 * USE CASE: Variables that need to change value but stay within block scope
 */
let accountEmail = "aman@gmail.com";
console.log("\n🔄 LET Declaration:");
console.log("Initial Email:", accountEmail, "| Type:", typeof accountEmail);
console.log("Scope: Block-scoped");
console.log("Reassignment: Allowed");
console.log("Re-declaration in same scope: Not allowed");

/**
 * VAR DECLARATION:
 * 
 * - Function-scoped (accessible throughout the entire function)
 * - Can be reassigned and re-declared
 * - Hoisted to the top of function/global scope
 * - No Temporal Dead Zone (can be accessed before declaration, returns undefined)
 * 
 * PROBLEMS WITH VAR:
 * - Can cause unexpected behavior due to function scoping
 * - Hoisting can lead to confusing code
 * - No block scope can cause variable leakage
 * 
 * USE CASE: Legacy code only (avoid in modern JavaScript)
 */
var accountPassword = "12345";
console.log("\n⚠️  VAR Declaration:");
console.log("Initial Password:", accountPassword, "| Type:", typeof accountPassword);
console.log("Scope: Function-scoped (problematic!)");
console.log("Reassignment: Allowed");
console.log("Re-declaration: Allowed (can cause bugs!)");

/**
 * IMPLICIT GLOBAL DECLARATION:
 * 
 * - Creates a global variable (attached to global object)
 * - No explicit declaration keyword
 * - Accessible from anywhere in the code
 * - Can cause naming conflicts and hard-to-debug issues
 * 
 * WARNING: This is considered bad practice and should be avoided!
 * In strict mode, this would throw a ReferenceError
 */
// Note: In strict mode, this would cause an error
// accountCity = "Kolkata"; // ❌ Bad practice - creates global variable

// Let's use proper declaration instead:
let accountCity = "Kolkata";
console.log("\n🌍 Proper City Declaration:");
console.log("City:", accountCity, "| Type:", typeof accountCity);
console.log("Note: Avoided implicit global declaration");

/**
 * UNINITIALIZED VARIABLE:
 * 
 * - Variables declared with let/const but not initialized
 * - let variables default to undefined
 * - const variables MUST be initialized (will throw SyntaxError if not)
 */
let accountState; // Declared but not initialized
console.log("\n❓ Uninitialized Variable:");
console.log("State:", accountState, "| Type:", typeof accountState);
console.log("Value: undefined (automatic default for uninitialized let variables)");

// =============================================================================
// SECTION 2: VARIABLE REASSIGNMENT DEMONSTRATIONS
// =============================================================================

console.log("\n" + "=".repeat(60));
console.log("VARIABLE REASSIGNMENT EXAMPLES");
console.log("=".repeat(60));

/**
 * DEMONSTRATING REASSIGNMENT RULES:
 */

// ❌ CONST cannot be reassigned (this would cause TypeError)
console.log("\n🚫 CONST Reassignment (Not Allowed):");
console.log("Attempting to change accountId would result in:");
console.log("TypeError: Assignment to constant variable.");
// accountId = 213; // Uncommenting this line would throw an error

// ✅ LET can be reassigned
console.log("\n✅ LET Reassignment (Allowed):");
console.log("Original email:", accountEmail);
accountEmail = "aman@google.com";
console.log("Updated email:", accountEmail);
console.log("✓ Successfully reassigned let variable");

// ✅ VAR can be reassigned
console.log("\n✅ VAR Reassignment (Allowed but Discouraged):");
console.log("Original password:", accountPassword);
accountPassword = "124";
console.log("Updated password:", accountPassword);
console.log("⚠️  VAR reassignment works but can cause scope issues");

// ✅ Properly declared variable can be reassigned
console.log("\n✅ City Reassignment:");
console.log("Original city:", accountCity);
accountCity = "Delhi";
console.log("Updated city:", accountCity);

// ✅ Uninitialized variable can be assigned
console.log("\n✅ State Assignment (was undefined):");
console.log("State before assignment:", accountState);
accountState = "West Bengal";
console.log("State after assignment:", accountState);

// =============================================================================
// SECTION 3: SCOPE DEMONSTRATIONS
// =============================================================================

console.log("\n" + "=".repeat(60));
console.log("SCOPE BEHAVIOR DEMONSTRATIONS");
console.log("=".repeat(60));

function demonstrateScope() {
    console.log("\n🔍 SCOPE DEMONSTRATION:");
    
    // Block scope example
    if (true) {
        const blockConst = "Block scoped const";
        let blockLet = "Block scoped let";
        var blockVar = "Function scoped var";
        
        console.log("Inside block:");
        console.log("  blockConst:", blockConst);
        console.log("  blockLet:", blockLet);
        console.log("  blockVar:", blockVar);
    }
    
    // Trying to access variables outside their scope
    console.log("Outside block:");
    
    // These would cause ReferenceError (commented out to prevent crash)
    // console.log("blockConst:", blockConst); // ❌ ReferenceError
    // console.log("blockLet:", blockLet);     // ❌ ReferenceError
    
    console.log("  blockVar:", blockVar); // ✅ Accessible (function-scoped)
    console.log("  ⚠️  Notice: Only var is accessible outside the block!");
}

function demonstrateHoisting() {
    console.log("\n🔄 HOISTING DEMONSTRATION:");
    
    console.log("Accessing variables before declaration:");
    
    // Hoisting with var (works but returns undefined)
    console.log("  hoistedVar before declaration:", typeof hoistedVar); // undefined
    
    // Hoisting with let/const (Temporal Dead Zone - would cause ReferenceError)
    // console.log("hoistedLet:", hoistedLet); // ❌ ReferenceError
    // console.log("hoistedConst:", hoistedConst); // ❌ ReferenceError
    
    var hoistedVar = "I am hoisted!";
    let hoistedLet = "I am in TDZ!";
    const hoistedConst = "I am also in TDZ!";
    
    console.log("After declaration:");
    console.log("  hoistedVar:", hoistedVar);
    console.log("  hoistedLet:", hoistedLet);
    console.log("  hoistedConst:", hoistedConst);
}

// Run scope demonstrations
demonstrateScope();
demonstrateHoisting();

// =============================================================================
// SECTION 4: CONSOLE.TABLE DEMONSTRATION
// =============================================================================

console.log("\n" + "=".repeat(60));
console.log("CONSOLE.TABLE DEMONSTRATION");
console.log("=".repeat(60));

/**
 * CONSOLE.TABLE():
 * 
 * A useful debugging method that displays data in a tabular format.
 * Much more readable than multiple console.log() statements.
 * 
 * SYNTAX: console.table(data, [columns])
 * - data: The data to display (array or object)
 * - columns: Optional array of column names to display
 */

console.log("\n📊 Displaying variables in tabular format:");

// Method 1: Array of values (shows index and values)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

console.log("\n📋 More structured approach with labels:");

// Method 2: Object with labeled properties (more descriptive)
const userAccount = {
    "Account ID": accountId,
    "Email": accountEmail,
    "Password": accountPassword, // Note: In real apps, never log passwords!
    "City": accountCity,
    "State": accountState
};

console.table(userAccount);

// Method 3: Array of objects (most structured approach)
console.log("\n🗂️  Array of objects format:");

const accountInfo = [
    { Property: "Account ID", Value: accountId, Type: typeof accountId, Mutable: "No (const)" },
    { Property: "Email", Value: accountEmail, Type: typeof accountEmail, Mutable: "Yes (let)" },
    { Property: "Password", Value: accountPassword, Type: typeof accountPassword, Mutable: "Yes (var)" },
    { Property: "City", Value: accountCity, Type: typeof accountCity, Mutable: "Yes (let)" },
    { Property: "State", Value: accountState, Type: typeof accountState, Mutable: "Yes (let)" }
];

console.table(accountInfo);

// =============================================================================
// SECTION 5: BEST PRACTICES AND RECOMMENDATIONS
// =============================================================================

console.log("\n" + "=".repeat(60));
console.log("MODERN JAVASCRIPT BEST PRACTICES");
console.log("=".repeat(60));

/**
 * MODERN JAVASCRIPT VARIABLE DECLARATION BEST PRACTICES:
 * 
 * 1. PREFER const BY DEFAULT
 *    - Use const for values that won't be reassigned
 *    - Makes code more predictable and less error-prone
 *    - Clearly indicates intent
 * 
 * 2. USE let WHEN REASSIGNMENT IS NEEDED
 *    - Only use let when you know the variable will change
 *    - Provides block scope safety
 * 
 * 3. AVOID var COMPLETELY
 *    - Function scoping can cause unexpected behavior
 *    - Hoisting behavior can be confusing
 *    - No benefits over let/const in modern JavaScript
 * 
 * 4. NEVER USE IMPLICIT GLOBALS
 *    - Always declare variables explicitly
 *    - Use strict mode to catch these errors
 */

function demonstrateBestPractices() {
    console.log("\n✅ BEST PRACTICES EXAMPLE:");
    
    // ✅ Good: Use const for values that won't change
    const PI = 3.14159;
    const API_URL = "https://api.example.com";
    const MAX_RETRIES = 3;
    
    // ✅ Good: Use let for variables that will change
    let counter = 0;
    let userInput = "";
    let isProcessing = false;
    
    // ✅ Good: Initialize variables when possible
    let result = null; // Better than: let result;
    
    // ✅ Good: Use descriptive names
    const userAccountBalance = 1000; // Better than: const bal = 1000;
    
    console.log("Constants defined:", { PI, API_URL, MAX_RETRIES });
    console.log("Variables initialized:", { counter, userInput, isProcessing, result });
    console.log("Descriptive naming used:", { userAccountBalance });
    
    // Demonstrate why const doesn't mean "immutable content"
    const userPreferences = {
        theme: "dark",
        language: "en"
    };
    
    console.log("Original preferences:", userPreferences);
    
    // ✅ This is allowed - we're modifying the object's properties, not reassigning the variable
    userPreferences.theme = "light";
    userPreferences.notifications = true;
    
    console.log("Modified preferences:", userPreferences);
    console.log("Note: const prevents reassignment, not mutation of object contents");
}

function demonstrateCommonPitfalls() {
    console.log("\n⚠️  COMMON PITFALLS TO AVOID:");
    
    // Pitfall 1: var in loops
    console.log("1. VAR in loops problem:");
    
    // Problem with var
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log("   VAR in setTimeout:", i); // Will print 3, 3, 3
        }, 10);
    }
    
    // Solution with let
    for (let j = 0; j < 3; j++) {
        setTimeout(() => {
            console.log("   LET in setTimeout:", j); // Will print 0, 1, 2
        }, 20);
    }
    
    console.log("2. Temporal Dead Zone:");
    console.log("   Accessing let/const before declaration causes ReferenceError");
    console.log("   Accessing var before declaration returns undefined");
    
    console.log("3. Accidental globals:");
    console.log("   Always use 'use strict' to catch undeclared variables");
    console.log("   Implicit globals can cause naming conflicts");
}

// Run best practices demonstrations
demonstrateBestPractices();
setTimeout(() => {
    demonstrateCommonPitfalls();
}, 100); // Delay to see setTimeout examples clearly

// =============================================================================
// SECTION 6: PRACTICAL REAL-WORLD EXAMPLES
// =============================================================================

console.log("\n" + "=".repeat(60));
console.log("REAL-WORLD PRACTICAL EXAMPLES");
console.log("=".repeat(60));

/**
 * REAL-WORLD SCENARIO: User Profile Management
 */
function createUserProfileExample() {
    console.log("\n👤 USER PROFILE MANAGEMENT EXAMPLE:");
    
    // ✅ Constants for configuration
    const MAX_USERNAME_LENGTH = 20;
    const MIN_PASSWORD_LENGTH = 8;
    const ALLOWED_EMAIL_DOMAINS = ['gmail.com', 'yahoo.com', 'outlook.com'];
    
    // ✅ Variables that will change
    let currentUser = null;
    let loginAttempts = 0;
    let isAuthenticated = false;
    
    // ✅ User data object (const reference, mutable content)
    const userData = {
        profile: {
            username: 'aman_dev',
            email: 'aman@gmail.com',
            city: 'Delhi',
            state: 'Delhi'
        },
        preferences: {
            theme: 'dark',
            notifications: true
        },
        security: {
            lastLogin: null,
            passwordChanged: new Date()
        }
    };
    
    // Display the organized data
    console.table(userData.profile);
    
    console.log("Configuration constants:", {
        MAX_USERNAME_LENGTH,
        MIN_PASSWORD_LENGTH,
        ALLOWED_EMAIL_DOMAINS: ALLOWED_EMAIL_DOMAINS.join(', ')
    });
    
    console.log("Session variables:", {
        currentUser,
        loginAttempts,
        isAuthenticated
    });
}

/**
 * REAL-WORLD SCENARIO: Shopping Cart
 */
function createShoppingCartExample() {
    console.log("\n🛒 SHOPPING CART EXAMPLE:");
    
    // ✅ Constants for business rules
    const TAX_RATE = 0.08;
    const FREE_SHIPPING_THRESHOLD = 50;
    const MAX_QUANTITY_PER_ITEM = 10;
    
    // ✅ Cart state variables
    let cartItems = [];
    let cartTotal = 0;
    let isCartEmpty = true;
    
    // ✅ Add some items to demonstrate
    const sampleItems = [
        { id: 1, name: 'Laptop', price: 999.99, quantity: 1 },
        { id: 2, name: 'Mouse', price: 25.99, quantity: 2 },
        { id: 3, name: 'Keyboard', price: 79.99, quantity: 1 }
    ];
    
    // Update cart variables
    cartItems = sampleItems;
    cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    isCartEmpty = cartItems.length === 0;
    
    console.log("Business rules:", {
        TAX_RATE: `${TAX_RATE * 100}%`,
        FREE_SHIPPING_THRESHOLD: `$${FREE_SHIPPING_THRESHOLD}`,
        MAX_QUANTITY_PER_ITEM
    });
    
    console.table(cartItems);
    
    console.log("Cart summary:", {
        totalItems: cartItems.length,
        subtotal: `$${cartTotal.toFixed(2)}`,
        tax: `$${(cartTotal * TAX_RATE).toFixed(2)}`,
        grandTotal: `$${(cartTotal + cartTotal * TAX_RATE).toFixed(2)}`,
        qualifiesForFreeShipping: cartTotal >= FREE_SHIPPING_THRESHOLD
    });
}

// Run practical examples
setTimeout(() => {
    createUserProfileExample();
}, 200);

setTimeout(() => {
    createShoppingCartExample();
}, 300);

// =============================================================================
// SECTION 7: SUMMARY AND KEY TAKEAWAYS
// =============================================================================

setTimeout(() => {
    console.log("\n" + "=".repeat(60));
    console.log("SUMMARY AND KEY TAKEAWAYS");
    console.log("=".repeat(60));
    
    console.log("\n📚 KEY POINTS TO REMEMBER:");
    console.log("✅ Use const by default for immutable bindings");
    console.log("✅ Use let when reassignment is needed");
    console.log("❌ Avoid var in modern JavaScript");
    console.log("❌ Never use implicit globals");
    console.log("✅ Always use 'use strict' mode");
    console.log("✅ Initialize variables when possible");
    console.log("✅ Use descriptive variable names");
    console.log("✅ Understand block scope vs function scope");
    console.log("✅ Be aware of hoisting and temporal dead zone");
    console.log("✅ Use console.table() for better debugging");
    
    console.log("\n🎯 QUICK DECISION GUIDE:");
    console.log("• Value never changes? → Use const");
    console.log("• Value will change? → Use let");
    console.log("• Need function scope? → Still use let (avoid var)");
    console.log("• Working with legacy code? → Gradually refactor var to let/const");
    
    console.log("\n✨ Your code is now following modern JavaScript best practices!");
}, 400);

// Final display of all variables in a clean table format
setTimeout(() => {
    console.log("\n📊 FINAL VARIABLE STATE:");
    const finalState = {
        "Account ID (const)": accountId,
        "Email (let)": accountEmail,
        "Password (var)": accountPassword,
        "City (let)": accountCity,
        "State (let)": accountState
    };
    console.table(finalState);
}, 500);