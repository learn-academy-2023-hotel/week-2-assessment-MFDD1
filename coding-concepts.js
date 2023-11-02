// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

// // const cohort = "Hotel 2023"
// // console.log(cohort.split(" "))

// // a) Your answer:each word will be split diff 
// // b) Verify and explain:
// // [ 'Hotel', '2023' ] i thought that the words would be spread individually and it only split the word with a coma and seperated both words instead of idividually. this is becasue we have the quotes spaced out insteaad of the double quotes together.

// // --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: error
// b) Verify and explain: came with undefined due to not having a return line after line 20 passed the curly braces

// --------------------3) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:only the odd numbers will happen, 11, 13, 15
// b) Verify and explain:answer was correct because filter method of searching only for the odd variables

// --------------------4) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// // console.log(myCodingSkills.languages[0])

// a) Your answer:javascript 
// b) Verify and explain: the console is calling on languages to find the first position in that parenthesis. ran node and got javascript in return

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: adding George this.student = name
// b) Verify and explain:we are letting the code know that we are going to be adding george to the program and output { student: 'George', cohort: 'Hotel', year: 2023 }
