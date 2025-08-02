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



