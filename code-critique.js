// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

def find_first_vowel_index(input_string):
    vowels = "aeiouAEIOU"  # Define a string of vowels (both lowercase and uppercase)

    for index, char in enumerate(input_string):
        if char in vowels:
            print(f"The first vowel '{char}' is at index {index}.")
            return  # Return as soon as the first vowel is found

    print("No vowels found in the input string.")

// # Example usage:
input_string = "Hello, World!"
// find_first_vowel_index(input_string)


// Critique the code output. 

// Things to consider in your critique: Were you surprised by the output?
// i was amas=zed at how it was simple to read yet complex enough for me to be like, im out of my realm Headers. 
//  Was the output what you expected? the output was definetly not what i expected  Is the correct output being rendered? i might of been running the wrong node test but it kept coming yup with and says module not found.

//  Error: Cannot find module '/Users/learnacademy/Desktop/WEEKLY CHALLENGES/week-2-assessment-MFDD1/week-2-assesment-MFDD1'
//     at Module._resolveFilename (node:internal/modules/cjs/loader:1048:15)
//     at Module._load (node:internal/modules/cjs/loader:901:27)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47 {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: []
// } 
 
//  What do you like about the code? What do you dislike? 
//  i like when you begin to analyse th ecode. how simple it was layed outerHeight. ut brought in many different methods to execute the end state needed.

//  Are there best practices that are not being followed? being a new person into the world of coding, it would look like you have many different programs working together and talking to one another and making it work.

//  Would you take a different approach? i What did you learn? I learned that you can bring in many approches to get the end state needed as long as you follow the rules and test test test to make sure everything is working as should.

