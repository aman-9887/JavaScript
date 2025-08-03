const name= "Aman"
const repoCount= 7

console.log(name+repoCount) // This will concatenate the string and number, resulting in "Aman7";
console.log(name + " has " + repoCount + " repositories."); // This will output: "Aman has 7 repositories."
// This is because JavaScript automatically converts the number to a string when concatenating with a string

console.log(`Hello, ${name}! You have ${repoCount} repositories.`); // This is a template literal, which allows for easier string interpolation
// This will output: "Hello, Aman! You have 7 repositories."

// how to declare a string in JavaScript:
const gameNme = new String("Chess"); // Using the String constructor
const gameName = "Chess"; // Using string literal notation

// Example of using string methods:
console.log(gameName); // "Chess" (this is the string itself)
console.log(gameNme[0]); // "C" (accessing the first character of the string)
console.log(gameName.__proto__); // String.prototype (this shows the prototype of the string object)
console.log(gameName.length); // 5 (this shows the length of the string)
console.log(gameName.toUpperCase()); // "CHESS" (this converts the string to uppercase)
console.log(gameName.toLowerCase()); // "chess" (this converts the string to lowercase)
console.log(gameName.charAt(0)); // "C" (this gets the character at index 0)
console.log(gameName.indexOf("e")); // 2 (this finds the index of the first occurrence of "e")
console.log(gameName.lastIndexOf("s")); // 3 (this finds the index of the last occurrence of "s")
console.log(gameName.includes("es")); // true (this checks if the string contains "es")
console.log(gameName.startsWith("Ch")); // true (this checks if the string starts with "Ch")
console.log(gameName.endsWith("ss")); // true (this checks if the string ends with "ss")
console.log(gameName.split("e")); // ["Ch", "ss"] (this splits the string into an array using "e" as the delimiter)
console.log(gameName.replace("Chess", "Checkers")); // "Checkers" (this replaces "Chess" with "Checkers")
console.log(gameName.replaceAll("s", "z")); // "Chezz" (this replaces all occurrences of "s" with "z")
console.log(gameName.trim()); // "Chess" (this removes whitespace from both ends of the string)
console.log(gameName.slice(1, 4)); // "hes" (this extracts a section of the string from index 1 to 4)
console.log(gameName.slice(-3)); // "ess" (this extracts the last 3 characters of the string)
console.log(gameName.slice(-4, -1)); // "Ches" (this extracts characters from index -4 to -1)
console.log(gameName.slice(-4,1)); // "Ch" (this extracts characters from index -4 to 1, which is the same as slice(0, 2))
console.log(gameName.substring(1)); // "hess" (this extracts characters from index 1 to the end of the string)
console.log(gameName.substring(1, 4)); // "hes" (this extracts a section of the string from index 1 to 4, similar to slice)
console.log(gameName.charCodeAt(0)); // 67 (this gets the Unicode value of the character at index 0)
console.log(gameName.codePointAt(0)); // 67 (this gets the Unicode code point of the character at index 0)




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

