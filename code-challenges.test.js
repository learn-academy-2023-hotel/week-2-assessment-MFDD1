// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.
// function multipliedByThree(arr) {
//     const result = arr.map((number) => number * 3);
//     return result;
// }
// const result1 =multipliedByThree(numbersArray1);
// const result2 = multipliedByThree(numbersArray2);

// console.log(result1)   //output: [18, 21, 24, 27, 30]
// console.log(result2)    //output: [72, 81, 90, 99, 108]

// Pseudo code:i used the multiplybythree method because it takes the arrays and recreates into new array to make each one three times its number. 

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
// function isDivisibleByThree(obj) {
//     // checking to see if the number exist in the object 
// if (typeof obj.number === `number`) {
// // checking to see if we can evenly divide by three
// return obj.number % 3 === 0;
// } else {
//     // if it is missing it snumber property, it will return as false 
//     return false;
// }
// }

// console.log(isDivisibleByThree(object1)) 
// received error and cannot think of what could work for this?

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
function checkDivBythr(obj) {
    // Extract the 'number' property from the object
    const number = obj.number;
  
    // Check if the number is divisible by three
    if (number % 3 === 0) {
      return `${number} is divisible by three`;
    } else {
      return `${number} is not divisible by three`;
    }
  }

  console.log(checkDivBythr(object1)); // Output: "15 is divisible by three"
  console.log(checkDivBythr(object2)); // Output: "0 is divisible by three"
  console.log(checkDivBythr(object3)); // Output: "-7 is not divisible by three"
  

// Pseudo code:

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code: