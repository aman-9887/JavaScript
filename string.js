const name2= "Aman"
const repoCount2= 7

console.log(name2+repoCount2) // This will concatenate the string and number, resulting in "Aman7";
console.log(name2 + " has " + repoCount2 + " repositories."); // This will output: "Aman has 7 repositories."
// This is because JavaScript automatically converts the number to a string when concatenating with a string

console.log(`Hello, ${name2}! You have ${repoCount2} repositories.`); // This is a template literal, which allows for easier string interpolation
// This will output: "Hello, Aman! You have 7 repositories."

// how to declare a string in JavaScript:
const gameNme2 = new String("Chess"); // Using the String constructor
const gameName3 = "Chess"; // Using string literal notation

// Example of using string methods:
console.log(gameName3); // "Chess" (this is the string itself)
console.log(gameNme2[0]); // "C" (accessing the first character of the string)
console.log(gameName3.__proto__); // String.prototype (this shows the prototype of the string object)
console.log(gameName3.length); // 5 (this shows the length of the string)
console.log(gameName3.toUpperCase()); // "CHESS" (this converts the string to uppercase)
console.log(gameName3.toLowerCase()); // "chess" (this converts the string to lowercase)
console.log(gameName3.charAt(0)); // "C" (this gets the character at index 0)
console.log(gameName3.indexOf("e")); // 2 (this finds the index of the first occurrence of "e")
console.log(gameName3.lastIndexOf("s")); // 3 (this finds the index of the last occurrence of "s")
console.log(gameName3.includes("es")); // true (this checks if the string contains "es")
console.log(gameName3.startsWith("Ch")); // true (this checks if the string starts with "Ch")
console.log(gameName3.endsWith("ss")); // true (this checks if the string ends with "ss")
console.log(gameName3.split("e")); // ["Ch", "ss"] (this splits the string into an array using "e" as the delimiter)
console.log(gameName3.replace("Chess", "Checkers")); // "Checkers" (this replaces "Chess" with "Checkers")
console.log(gameName3.replaceAll("s", "z")); // "Chezz" (this replaces all occurrences of "s" with "z")
console.log(gameName3.trim()); // "Chess" (this removes whitespace from both ends of the string)
console.log(gameName3.slice(1, 4)); // "hes" (this extracts a section of the string from index 1 to 4)
console.log(gameName3.slice(-3)); // "ess" (this extracts the last 3 characters of the string)
console.log(gameName3.slice(-4, -1)); // "Ches" (this extracts characters from index -4 to -1)
console.log(gameName3.slice(-4,1)); // "Ch" (this extracts characters from index -4 to 1, which is the same as slice(0, 2))
console.log(gameName3.substring(1)); // "hess" (this extracts characters from index 1 to the end of the string)
console.log(gameName3.substring(1, 4)); // "hes" (this extracts a section of the string from index 1 to 4, similar to slice)
console.log(gameName3.charCodeAt(0)); // 67 (this gets the Unicode value of the character at index 0)
console.log(gameName3.codePointAt(0)); // 67 (this gets the Unicode code point of the character at index 0)




// const gameName = new String('Chess');
// undefined
// gameName
// String {'Chess'}
//     0: "C"
//     1: "h"
//     2: "e"
//     3: "s"
//     4: "s"
//     length: 5
//     [[Prototype]]: String
//     [[PrimitiveValue]]: "Chess" 
// This creates a String object, which is different from a string primitive. and if you run this code for creating a string in console then it will show you the String object with its properties and methods.



// ***********************************************************************************************************
// *************************** Detailed and better explanation ***************************

/**
 * JAVASCRIPT STRINGS - COMPREHENSIVE GUIDE
 * ========================================
 * 
 * This code demonstrates:
 * 1. String concatenation methods (traditional vs modern)
 * 2. Template literals and string interpolation
 * 3. String primitives vs String objects
 * 4. Comprehensive string methods and their use cases
 * 5. String indexing and character access
 * 6. Advanced string manipulation techniques
 * 7. Performance considerations and best practices
 */

"use strict"; // Enable strict mode for better error handling

// =============================================================================
// SECTION 1: BASIC STRING CONCATENATION
// =============================================================================

console.log("=".repeat(70));
console.log("JAVASCRIPT STRING CONCATENATION AND INTERPOLATION");
console.log("=".repeat(70));

/**
 * STRING CONCATENATION BASICS:
 * JavaScript provides multiple ways to combine strings and other data types
 */

const name = "Aman";
const repoCount = 7;

console.log("\n📝 BASIC CONCATENATION EXAMPLES:");

// Method 1: Simple concatenation with + operator
console.log("1. Simple concatenation:");
console.log("   Result:", name + repoCount);
console.log("   Explanation: String + Number = String concatenation");
console.log("   Type coercion: Number 7 becomes string '7'");
console.log("   Final result: 'Aman' + '7' = 'Aman7'");

// Method 2: Complex concatenation with multiple strings
console.log("\n2. Complex concatenation:");
const traditionalMessage = name + " has " + repoCount + " repositories.";
console.log("   Result:", traditionalMessage);
console.log("   Explanation: Multiple concatenations with + operator");
console.log("   Process: 'Aman' + ' has ' + '7' + ' repositories.'");

/**
 * TEMPLATE LITERALS (ES6+):
 * 
 * Template literals use backticks (`) and allow:
 * - String interpolation with ${expression}
 * - Multi-line strings
 * - Better readability
 * - Expression evaluation inside placeholders
 * 
 * ADVANTAGES:
 * - More readable than concatenation
 * - Supports expressions, not just variables
 * - Better performance for complex strings
 * - Multi-line support without escape characters
 */

console.log("\n3. Template literal (Modern ES6+ approach):");
const modernMessage = `Hello, ${name}! You have ${repoCount} repositories.`;
console.log("   Result:", modernMessage);
console.log("   Syntax: Uses backticks (`) and ${} for interpolation");
console.log("   Benefits: Cleaner, more readable, supports expressions");

// Advanced template literal examples
console.log("\n4. Advanced template literal features:");
const advancedMessage = `
User Profile Summary:
━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Repositories: ${repoCount}
Average repos per year: ${(repoCount / 2).toFixed(1)}
Status: ${repoCount > 5 ? 'Active Developer' : 'Getting Started'}
Profile URL: https://github.com/${name.toLowerCase()}
`;
console.log(advancedMessage);

// =============================================================================
// SECTION 2: STRING CREATION METHODS
// =============================================================================

console.log("\n" + "=".repeat(70));
console.log("STRING CREATION: PRIMITIVES VS OBJECTS");
console.log("=".repeat(70));

/**
 * STRING PRIMITIVES VS STRING OBJECTS:
 * 
 * JavaScript has two ways to create strings:
 * 1. String literals (primitives) - Recommended
 * 2. String constructor (objects) - Rarely used
 */

console.log("\n🔤 STRING CREATION METHODS:");

// Method 1: String literal (primitive) - RECOMMENDED
const gameName = "Chess";
console.log("1. String Literal (Primitive):");
console.log("   Declaration: const gameName = 'Chess';");
console.log("   Value:", gameName);
console.log("   Type:", typeof gameName); // "string"
console.log("   Is primitive:", typeof gameName === "string");

// Method 2: String constructor (object) - RARELY USED
const gameNameObject = new String("Chess");
console.log("\n2. String Constructor (Object):");
console.log("   Declaration: const gameNameObject = new String('Chess');");
console.log("   Value:", gameNameObject);
console.log("   Type:", typeof gameNameObject); // "object"
console.log("   Is object:", typeof gameNameObject === "object");

/**
 * KEY DIFFERENCES BETWEEN STRING PRIMITIVES AND OBJECTS:
 */
console.log("\n⚖️  COMPARISON: Primitive vs Object:");
console.log("Primitive value:", gameName);
console.log("Object value:", gameNameObject);
console.log("Equality check (==):", gameName == gameNameObject);  // true (value comparison)
console.log("Strict equality (===):", gameName === gameNameObject); // false (type difference)
console.log("Primitive typeof:", typeof gameName); // "string"
console.log("Object typeof:", typeof gameNameObject); // "object"

/**
 * STRING OBJECT STRUCTURE:
 * When you create a String object, it has the following structure:
 */
console.log("\n🔍 STRING OBJECT INTERNAL STRUCTURE:");
console.log("String object breakdown:");
console.log("├── Index-based character access:");
for (let i = 0; i < gameNameObject.length; i++) {
    console.log(`│   [${i}]: "${gameNameObject[i]}"`);
}
console.log("├── length property:", gameNameObject.length);
console.log("├── [[Prototype]]: String.prototype");
console.log("└── [[PrimitiveValue]]:", gameNameObject.valueOf());

// =============================================================================
// SECTION 3: STRING INDEXING AND CHARACTER ACCESS
// =============================================================================

console.log("\n" + "=".repeat(70));
console.log("STRING INDEXING AND CHARACTER ACCESS");
console.log("=".repeat(70));

/**
 * STRING CHARACTER ACCESS:
 * Multiple ways to access individual characters in strings
 */

console.log("\n🎯 CHARACTER ACCESS METHODS:");

// Method 1: Bracket notation (array-like access)
console.log("1. Bracket notation [index]:");
console.log(`   gameName[0]: "${gameName[0]}" (first character)`);
console.log(`   gameName[1]: "${gameName[1]}" (second character)`);
console.log(`   gameName[${gameName.length - 1}]: "${gameName[gameName.length - 1]}" (last character)`);
console.log(`   gameName[10]: "${gameName[10]}" (out of bounds = undefined)`);

// Method 2: charAt() method
console.log("\n2. charAt() method:");
console.log(`   gameName.charAt(0): "${gameName.charAt(0)}" (first character)`);
console.log(`   gameName.charAt(2): "${gameName.charAt(2)}" (third character)`);
console.log(`   gameName.charAt(10): "${gameName.charAt(10)}" (out of bounds = empty string)`);
console.log("   Difference: charAt() returns empty string for invalid indices");

// Method 3: String properties and prototype
console.log("\n3. String properties:");
console.log("   Length:", gameName.length);
console.log("   Prototype chain:", gameName.__proto__ === String.prototype);
console.log("   Constructor:", gameName.constructor.name);

// =============================================================================
// SECTION 4: COMPREHENSIVE STRING METHODS
// =============================================================================

console.log("\n" + "=".repeat(70));
console.log("COMPREHENSIVE STRING METHODS GUIDE");
console.log("=".repeat(70));

/**
 * STRING METHODS CATEGORIZED BY FUNCTION:
 * 
 * 1. Case Conversion Methods
 * 2. Search and Query Methods  
 * 3. Extraction and Slicing Methods
 * 4. Modification Methods
 * 5. Unicode and Character Code Methods
 * 6. Whitespace Handling Methods
 */

console.log("\n🔄 CASE CONVERSION METHODS:");
console.log("Original string:", `"${gameName}"`);
console.log("toUpperCase():", `"${gameName.toUpperCase()}" - Converts all to uppercase`);
console.log("toLowerCase():", `"${gameName.toLowerCase()}" - Converts all to lowercase`);

console.log("\n🔍 SEARCH AND QUERY METHODS:");
console.log("Original string:", `"${gameName}"`);
console.log(`indexOf("e"):`, gameName.indexOf("e"), "- First occurrence of 'e'");
console.log(`indexOf("s"):`, gameName.indexOf("s"), "- First occurrence of 's'");
console.log(`lastIndexOf("s"):`, gameName.lastIndexOf("s"), "- Last occurrence of 's'");
console.log(`indexOf("x"):`, gameName.indexOf("x"), "- Returns -1 if not found");
console.log(`includes("es"):`, gameName.includes("es"), "- Check if substring exists");
console.log(`includes("xyz"):`, gameName.includes("xyz"), "- Returns false if not found");
console.log(`startsWith("Ch"):`, gameName.startsWith("Ch"), "- Check if string starts with substring");
console.log(`startsWith("ch"):`, gameName.startsWith("ch"), "- Case sensitive");
console.log(`endsWith("ss"):`, gameName.endsWith("ss"), "- Check if string ends with substring");
console.log(`endsWith("SS"):`, gameName.endsWith("SS"), "- Case sensitive");

console.log("\n✂️  EXTRACTION AND SLICING METHODS:");
console.log("Original string:", `"${gameName}" (length: ${gameName.length})`);

// slice() method - most versatile
console.log("\nslice() method (recommended for most cases):");
console.log(`slice(1, 4):`, `"${gameName.slice(1, 4)}" - Extract from index 1 to 4 (exclusive)`);
console.log(`slice(-3):`, `"${gameName.slice(-3)}" - Extract last 3 characters`);
console.log(`slice(-4, -1):`, `"${gameName.slice(-4, -1)}" - Extract from -4 to -1`);
console.log(`slice(1):`, `"${gameName.slice(1)}" - Extract from index 1 to end`);
console.log(`slice(0, 2):`, `"${gameName.slice(0, 2)}" - Extract first 2 characters`);

// substring() method - similar to slice but handles negatives differently
console.log("\nsubstring() method:");
console.log(`substring(1, 4):`, `"${gameName.substring(1, 4)}" - Similar to slice(1, 4)`);
console.log(`substring(1):`, `"${gameName.substring(1)}" - From index 1 to end`);
console.log(`substring(-3):`, `"${gameName.substring(-3)}" - Negative treated as 0`);
console.log("Note: substring treats negative values as 0");

// substr() method - DEPRECATED (don't use in new code)
console.log("\nsubstr() method (DEPRECATED - avoid in new code):");
console.log(`substr(1, 3):`, `"${gameName.substr(1, 3)}" - Start at 1, take 3 characters`);

console.log("\n🔧 MODIFICATION METHODS (Return new strings):");
const testString = "  Hello World  ";
console.log("Test string:", `"${testString}"`);

console.log(`replace("Chess", "Checkers"):`, `"${gameName.replace("Chess", "Checkers")}" - Replace first occurrence`);
console.log(`replaceAll("s", "z"):`, `"${gameName.replaceAll("s", "z")}" - Replace all occurrences`);
console.log(`split("e"):`, gameName.split("e"), "- Split into array using delimiter");
console.log(`split(""):`, gameName.split(""), "- Split into individual characters");
console.log(`trim():`, `"${testString.trim()}" - Remove whitespace from both ends`);
console.log(`trimStart():`, `"${testString.trimStart()}" - Remove leading whitespace`);
console.log(`trimEnd():`, `"${testString.trimEnd()}" - Remove trailing whitespace`);

console.log("\n🔢 UNICODE AND CHARACTER CODE METHODS:");
console.log("Original string:", `"${gameName}"`);
console.log(`charCodeAt(0):`, gameName.charCodeAt(0), "- Unicode value of character at index 0");
console.log(`charCodeAt(1):`, gameName.charCodeAt(1), "- Unicode value of 'h'");
console.log(`codePointAt(0):`, gameName.codePointAt(0), "- Unicode code point (same as charCodeAt for basic characters)");
console.log("String.fromCharCode(67, 104, 101, 115, 115):", String.fromCharCode(67, 104, 101, 115, 115));

// =============================================================================
// SECTION 5: ADVANCED STRING OPERATIONS
// =============================================================================

console.log("\n" + "=".repeat(70));
console.log("ADVANCED STRING OPERATIONS AND PATTERNS");
console.log("=".repeat(70));

/**
 * PRACTICAL STRING MANIPULATION EXAMPLES:
 */

function demonstrateAdvancedStringOperations() {
    console.log("\n🚀 ADVANCED STRING OPERATIONS:");
    
    // String padding (ES8/ES2017)
    const number = "42";
    console.log("String padding:");
    console.log(`padStart(5, '0'):`, `"${number.padStart(5, '0')}" - Pad start with zeros`);
    console.log(`padEnd(5, '*'):`, `"${number.padEnd(5, '*')}" - Pad end with asterisks`);
    
    // String repetition (ES6)
    const pattern = "★";
    console.log(`\nString repetition:`);
    console.log(`repeat(5):`, `"${pattern.repeat(5)}" - Repeat string 5 times`);
    
    // Template literal with expressions
    const user = { name: "Aman", repos: 7, joined: 2022 };
    const currentYear = new Date().getFullYear();
    const profileTemplate = `
╔══════════════════════════════════════╗
║          DEVELOPER PROFILE           ║
╠══════════════════════════════════════╣
║ Name: ${user.name.padEnd(28)} ║
║ Repositories: ${user.repos.toString().padEnd(19)} ║
║ Years Active: ${(currentYear - user.joined).toString().padEnd(19)} ║
║ Status: ${'Active'.padEnd(25)} ║
╚══════════════════════════════════════╝`;
    
    console.log("\nAdvanced template literal:");
    console.log(profileTemplate);
}

function demonstrateStringValidation() {
    console.log("\n✅ STRING VALIDATION EXAMPLES:");
    
    const email = "aman@example.com";
    const phone = "+1-234-567-8900";
    const username = "aman_dev123";
    
    // Email validation (basic)
    const isValidEmail = email.includes("@") && email.includes(".") && email.indexOf("@") > 0;
    console.log(`Email "${email}" is valid:`, isValidEmail);
    
    // Phone number checking
    const hasCountryCode = phone.startsWith("+");
    const phoneDigits = phone.replace(/\D/g, ""); // Remove non-digits
    console.log(`Phone "${phone}" has country code:`, hasCountryCode);
    console.log(`Phone digits only: "${phoneDigits}"`);
    
    // Username validation
    const isValidUsername = username.length >= 3 && 
                           username.length <= 20 && 
                           /^[a-zA-Z0-9_]+$/.test(username);
    console.log(`Username "${username}" is valid:`, isValidUsername);
}

function demonstrateStringUtilities() {
    console.log("\n🛠️ UTILITY FUNCTIONS:");
    
    // Title case function
    function toTitleCase(str) {
        return str.split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                  .join(' ');
    }
    
    // Capitalize first letter
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    // Truncate with ellipsis
    function truncate(str, maxLength) {
        return str.length > maxLength ? str.slice(0, maxLength - 3) + '...' : str;
    }
    
    // Count words
    function countWords(str) {
        return str.trim().split(/\s+/).filter(word => word.length > 0).length;
    }
    
    const testText = "hello world from javascript";
    const longText = "This is a very long sentence that needs to be truncated for display purposes";
    
    console.log(`Original: "${testText}"`);
    console.log(`Title case: "${toTitleCase(testText)}"`);
    console.log(`Capitalized: "${capitalize(testText)}"`);
    console.log(`Truncated (20): "${truncate(longText, 20)}"`);
    console.log(`Word count: ${countWords(testText)} words`);
}

// Run advanced demonstrations
demonstrateAdvancedStringOperations();
demonstrateStringValidation();
demonstrateStringUtilities();

// =============================================================================
// SECTION 6: PERFORMANCE COMPARISONS
// =============================================================================

console.log("\n" + "=".repeat(70));
console.log("PERFORMANCE AND BEST PRACTICES");
console.log("=".repeat(70));

function demonstratePerformanceTips() {
    console.log("\n⚡ PERFORMANCE TIPS:");
    
    // Template literals vs concatenation for complex strings
    const iterations = 1000;
    const data = { name: "Aman", count: 42, status: "active" };
    
    console.log("For simple concatenation:");
    console.log("✅ Use + operator: 'Hello ' + name");
    console.log("✅ Use template literals: `Hello ${name}`");
    
    console.log("\nFor complex strings:");
    console.log("❌ Avoid: str = str + 'more' + 'content' (creates new strings)");
    console.log("✅ Use: Template literals or array.join()");
    
    // Memory-efficient string building
    console.log("\nMemory-efficient string building:");
    const parts = [];
    parts.push("Line 1");
    parts.push("Line 2");
    parts.push("Line 3");
    const result = parts.join('\n');
    console.log("Using array.join():", `"${result}"`);
}

function demonstrateBestPractices() {
    console.log("\n📚 BEST PRACTICES:");
    
    console.log("1. String Creation:");
    console.log("   ✅ Use string literals: 'text' or \"text\"");
    console.log("   ❌ Avoid: new String('text')");
    
    console.log("\n2. String Comparison:");
    console.log("   ✅ Use === for exact comparison");
    console.log("   ✅ Use toLowerCase() for case-insensitive comparison");
    
    console.log("\n3. String Interpolation:");
    console.log("   ✅ Use template literals: `Hello ${name}`");
    console.log("   ❌ Avoid complex concatenation: 'Hello ' + name + '!'");
    
    console.log("\n4. String Methods:");
    console.log("   ✅ Remember: String methods return NEW strings");
    console.log("   ✅ Chain methods: str.trim().toLowerCase()");
    console.log("   ✅ Use slice() over substr() (deprecated)");
    
    console.log("\n5. Validation:");
    console.log("   ✅ Check string existence: if (str && str.length > 0)");
    console.log("   ✅ Use appropriate methods: includes(), startsWith(), endsWith()");
}

// Run performance demonstrations  
demonstratePerformanceTips();
demonstrateBestPractices();

// =============================================================================
// SECTION 7: SUMMARY AND CHEAT SHEET
// =============================================================================

console.log("\n" + "=".repeat(70));
console.log("STRING METHODS CHEAT SHEET");
console.log("=".repeat(70));

const cheatSheetData = [
    { Category: "Creation", Method: "String literals", Example: "'text' or \"text\"", Purpose: "Preferred way" },
    { Category: "Case", Method: "toUpperCase()", Example: "'hello'.toUpperCase()", Purpose: "Convert to uppercase" },
    { Category: "Case", Method: "toLowerCase()", Example: "'HELLO'.toLowerCase()", Purpose: "Convert to lowercase" },
    { Category: "Search", Method: "indexOf()", Example: "'hello'.indexOf('e')", Purpose: "Find first occurrence" },
    { Category: "Search", Method: "includes()", Example: "'hello'.includes('ell')", Purpose: "Check if contains" },
    { Category: "Search", Method: "startsWith()", Example: "'hello'.startsWith('he')", Purpose: "Check start" },
    { Category: "Search", Method: "endsWith()", Example: "'hello'.endsWith('lo')", Purpose: "Check end" },
    { Category: "Extract", Method: "slice()", Example: "'hello'.slice(1, 4)", Purpose: "Extract substring" },
    { Category: "Extract", Method: "substring()", Example: "'hello'.substring(1, 4)", Purpose: "Extract (no negatives)" },
    { Category: "Modify", Method: "replace()", Example: "'hello'.replace('l', 'x')", Purpose: "Replace first match" },
    { Category: "Modify", Method: "replaceAll()", Example: "'hello'.replaceAll('l', 'x')", Purpose: "Replace all matches" },
    { Category: "Modify", Method: "split()", Example: "'a,b,c'.split(',')", Purpose: "Split to array" },
    { Category: "Modify", Method: "trim()", Example: "' hello '.trim()", Purpose: "Remove whitespace" }
];

console.table(cheatSheetData);

console.log("\n🎯 KEY TAKEAWAYS:");
console.log("✅ Use template literals for string interpolation");
console.log("✅ String methods return new strings (immutable)");
console.log("✅ Prefer string literals over String constructor");
console.log("✅ Use slice() for most extraction needs");
console.log("✅ Chain methods for complex operations");
console.log("✅ Remember strings are zero-indexed");
console.log("✅ Use strict equality (===) for comparisons");

console.log("\n🚀 You now have a comprehensive understanding of JavaScript strings!");