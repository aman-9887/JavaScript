const accountId = 144553; // we use const so that the value cannot be changed afterwards (block scope)
let accountEmail = "aman@gmail.com"; // can be reassigned  value but can't be declared again (block scope)
var accountPassword = "12345"; // (global scope) using var can be difficut as whenever new variables are declared using same name inside another block it will change all the variables value with same name
accountCity = "Kolkata"; // we can also declare a variable or assign a memory without using var and let
let accountState; // after printing this it will show the value undefined as the values was not initialized

// accountId = 213  // not allowed
accountEmail = "aman@google.com";
accountPassword = "124";
accountCity = "Delhi";

//console.log(accountId);
//console.log(accountEmail);

/*
Prefer not to use var 
because of issue in block scope and functional block
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
// console.table([group of variables you want to show in tabular form])