console.log("2" > 1); // true (string "2" is converted to number 2)
console.log("2" < 1); // false (string "2" is converted to number 2)

console.log(null > 0); // false (null is converted to 0)
console.log(null < 0); // false (null is converted to 0)    
console.log(null == 0); // false (null is not equal to 0)
console.log(null >= 0); // true (null is converted to 0, so null >= 0 is true)
console.log(null <= 0); // true (null is converted to 0, so null <= 0 is true)
console.log(null == undefined); // true (null and undefined are loosely equal)

// In JavaScript, null and undefined are both falsy values, but they are not the same.
console.log(null === undefined); // false (strict equality, different types)

// The difference between null and undefined:
// - null is an intentional absence of value, often used to indicate that a variable has been assigned no value.
// - undefined means a variable has been declared but not assigned a value, or a function does not return a value.
console.log(typeof null); // "object" (this is a known quirk in JavaScript)
console.log(typeof undefined); // "undefined"

// in JavaScript, the reason is that an equaltiy check == and comparisons <> >= <= works differently.
// Comparisons like <, >, <=, >= convert the values to numbers before comparing them. treating it as a 0.
// That's why (3 > null) is true, because null is converted to 0, and 3 is greater than 0.

console.log(undefined == 0); // false (undefined is not equal to 0)
console.log(undefined > 0); // false (undefined is converted to NaN, which is not greater than 0)
console.log(undefined < 0); // false (undefined is converted to NaN, which is not less than 0)
console.log(undefined >= 0); // false (undefined is converted to NaN, which is not greater than or equal to 0)
console.log(undefined <= 0); // false (undefined is converted to NaN, which is not less than or equal to 0)
console.log(undefined == null); // true (undefined and null are loosely equal)

// === is a strict equality operator that checks both value and type.
console.log(undefined === null); // false (undefined and null are of different types)
console.log("2" === 2); // false (string "2" is not strictly equal to number 2)
console.log("2" == 2); // true (string "2" is loosely equal to number 2) 



// ***********************************************************************************************************
// *************************** Detailed and better explanation of comparison in JavaScript ***************************

/**
 * JAVASCRIPT TYPE COERCION AND EQUALITY COMPARISONS
 * =================================================
 * 
 * This code demonstrates how JavaScript handles type coercion in different scenarios:
 * 1. String to Number conversion in comparisons
 * 2. null behavior in various operations
 * 3. undefined behavior in various operations
 * 4. Differences between loose (==) and strict (===) equality
 * 
 * Key Concept: JavaScript has two different mechanisms for comparisons:
 * - Equality checks (== and ===) follow specific rules
 * - Relational comparisons (<, >, <=, >=) convert operands to primitives/numbers
 */

console.log("=".repeat(60));
console.log("SECTION 1: STRING TO NUMBER COERCION IN COMPARISONS");
console.log("=".repeat(60));

/**
 * When using comparison operators (<, >, <=, >=), JavaScript converts
 * both operands to numbers before comparing them.
 * 
 * Process:
 * 1. Convert operands to primitive values
 * 2. If both are strings, compare lexicographically
 * 3. Otherwise, convert to numbers and compare numerically
 */

console.log("2" > 1);  // true
console.log("Explanation: '2' gets converted to number 2, then 2 > 1 = true");

console.log("2" < 1);  // false  
console.log("Explanation: '2' gets converted to number 2, then 2 < 1 = false");

console.log("\n" + "=".repeat(60));
console.log("SECTION 2: NULL BEHAVIOR IN DIFFERENT OPERATIONS");
console.log("=".repeat(60));

/**
 * NULL CONVERSION RULES:
 * - In numeric context: null converts to 0
 * - In equality checks (==): null only equals undefined
 * - In strict equality (===): null only equals null
 */

// Relational comparisons: null converts to 0
console.log(null > 0);   // false
console.log("Explanation: null converts to 0, so 0 > 0 = false");

console.log(null < 0);   // false
console.log("Explanation: null converts to 0, so 0 < 0 = false");

// Equality check: null does NOT convert to 0 for == operator
console.log(null == 0);  // false
console.log("Explanation: null == 0 is false because equality (==) has special rules");
console.log("null only equals undefined in loose equality, never converts to 0");

// Relational comparisons with equality: null converts to 0
console.log(null >= 0);  // true
console.log("Explanation: null converts to 0, so 0 >= 0 = true");

console.log(null <= 0);  // true
console.log("Explanation: null converts to 0, so 0 <= 0 = true");

// Special case: null and undefined are loosely equal
console.log(null == undefined);  // true
console.log("Explanation: By ECMAScript specification, null == undefined is always true");

// Strict equality: no type conversion
console.log(null === undefined); // false
console.log("Explanation: Strict equality checks type AND value. null ≠ undefined in type");

console.log("\n" + "=".repeat(60));
console.log("SECTION 3: TYPE CHECKING FOR NULL AND UNDEFINED");
console.log("=".repeat(60));

/**
 * IMPORTANT JAVASCRIPT QUIRK:
 * typeof null returns "object" - this is a well-known bug in JavaScript
 * that has been kept for backward compatibility reasons.
 */

console.log(typeof null);      // "object" (historical bug in JavaScript)
console.log("Note: This is a famous JavaScript quirk - null reports as 'object'");

console.log(typeof undefined); // "undefined" (correct type)
console.log("Note: undefined correctly reports its type");

console.log("\n" + "=".repeat(60));
console.log("SECTION 4: UNDEFINED BEHAVIOR IN DIFFERENT OPERATIONS");
console.log("=".repeat(60));

/**
 * UNDEFINED CONVERSION RULES:
 * - In numeric context: undefined converts to NaN
 * - NaN compared to any number is always false
 * - In equality checks (==): undefined only equals null
 */

console.log(undefined == 0);  // false
console.log("Explanation: undefined only equals null in loose equality, never 0");

console.log(undefined > 0);   // false
console.log("Explanation: undefined converts to NaN, and NaN > 0 = false");

console.log(undefined < 0);   // false
console.log("Explanation: undefined converts to NaN, and NaN < 0 = false");

console.log(undefined >= 0);  // false
console.log("Explanation: undefined converts to NaN, and NaN >= 0 = false");

console.log(undefined <= 0);  // false
console.log("Explanation: undefined converts to NaN, and NaN <= 0 = false");

console.log(undefined == null); // true
console.log("Explanation: By specification, undefined == null is always true");

console.log("\n" + "=".repeat(60));
console.log("SECTION 5: STRICT VS LOOSE EQUALITY COMPARISON");
console.log("=".repeat(60));

/**
 * LOOSE EQUALITY (==) vs STRICT EQUALITY (===):
 * 
 * Loose Equality (==):
 * - Performs type coercion if operands are different types
 * - Follows complex conversion rules
 * 
 * Strict Equality (===):
 * - No type coercion
 * - Returns true only if both value AND type are identical
 */

// Strict equality: different types = false
console.log(undefined === null); // false
console.log("Explanation: undefined and null are different types, no coercion in ===");

console.log("2" === 2); // false
console.log("Explanation: string '2' and number 2 are different types");

// Loose equality: type coercion occurs
console.log("2" == 2);  // true
console.log("Explanation: string '2' gets converted to number 2, then 2 == 2 = true");

console.log("\n" + "=".repeat(60));
console.log("SECTION 6: PRACTICAL EXAMPLES AND BEST PRACTICES");
console.log("=".repeat(60));

/**
 * DEMONSTRATION: Why these behaviors matter in real code
 */

// Example 1: Form validation scenario
function demonstrateFormValidation() {
    let userInput = "0";  // User enters "0" in a form field
    
    console.log("User input: '0' (string from form)");
    console.log("userInput == 0:", userInput == 0);   // true (coercion)
    console.log("userInput === 0:", userInput === 0); // false (strict)
    console.log("Recommended: Use === for predictable behavior");
}

// Example 2: Null checking best practices
function demonstrateNullChecking() {
    let value = null;
    
    console.log("\nNull checking approaches:");
    console.log("value == null:", value == null);     // true (catches null and undefined)
    console.log("value === null:", value === null);   // true (only null)
    console.log("value == undefined:", value == undefined); // true (coercion)
    console.log("value === undefined:", value === undefined); // false
    
    console.log("Best practice: Use 'value == null' to check for null OR undefined");
}

// Example 3: Common pitfalls
function demonstrateCommonPitfalls() {
    console.log("\nCommon pitfalls to avoid:");
    
    // Pitfall 1: Mixing comparison operators
    console.log("null >= 0:", null >= 0);  // true
    console.log("null == 0:", null == 0);  // false
    console.log("Pitfall: Different operators handle null differently!");
    
    // Pitfall 2: Truthy/falsy vs equality
    console.log("Boolean(null):", Boolean(null));     // false
    console.log("null == false:", null == false);     // false
    console.log("Pitfall: Falsy doesn't mean == false!");
}

// Run demonstration functions
demonstrateFormValidation();
demonstrateNullChecking();
demonstrateCommonPitfalls();

console.log("\n" + "=".repeat(60));
console.log("SUMMARY AND RECOMMENDATIONS");
console.log("=".repeat(60));

/**
 * KEY TAKEAWAYS:
 * 
 * 1. ALWAYS use strict equality (===) unless you specifically need type coercion
 * 2. Be aware that comparison operators (<, >, <=, >=) and equality operators (==, ===) 
 *    follow different conversion rules
 * 3. null converts to 0 in numeric contexts but only equals undefined in == comparisons
 * 4. undefined converts to NaN in numeric contexts, making all numeric comparisons false
 * 5. Use 'value == null' to check for both null and undefined efficiently
 * 6. typeof null returns "object" (historical quirk)
 * 
 * BEST PRACTICES:
 * - Prefer === over == for predictable behavior
 * - Use explicit type conversion when needed: Number(value), String(value)
 * - Use 'value == null' for null/undefined checks
 * - Always test edge cases with null, undefined, and type coercion
 */

console.log("\n✅ Code execution completed!");
console.log("📚 Remember: When in doubt, use strict equality (===) and explicit conversions!");