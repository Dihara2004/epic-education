// External JavaScript file

// JavaScript Variable Types
var userEmail = "shalithadev@gmail.com";
const userName = "Hashan Shalitha"; // String
let userAge = 28; // Number
const isAuthenticated = false; // Boolean
const lastName = null;
const firstName = undefined;
const userData = {
  firstName: "Dihara",
  lastName: "Sathmi",
  age: 21,
};
// Arrays
const fruits = ["banana", "apple", "guava"]; // String Array
const numbers = [1, 2, 3, 4]; // Number Array
const users = [
  { id: 1, name: "Dihara" },
  { id: 2, name: "Sathmi" },
  { id: 3, name: "Kavindu" },
]; // Object Array

// userName = "Shalitha Hashan"

// This is a single line comment

/*
This is a
multi-line
comment
*/

userAge = 20;

// console.log("I'm second javascript file here!", {userEmail, userName, userAge});

console.log(userEmail, typeof userEmail);
console.log(userAge, typeof userAge);
console.log("value:", isAuthenticated, "type:", typeof isAuthenticated);
console.log("value:", lastName, "type:", typeof lastName);
console.log("value:", firstName, "type:", typeof firstName);
console.log("value:", userData, "type:", typeof userData);
console.log("value:", fruits, "type:", typeof fruits);
console.log("value:", numbers, "type:", typeof numbers);
console.log("value:", users, "type:", typeof users);