#!/usr/bin/env node


// Importing inquirer and chalk Pakeges

import inquirer  from "inquirer";
import chalk from "chalk";

// Display a colourful Welcome message

console.log(chalk.bold.cyanBright("\n \t\t Code With Huzair - Word Counter"))
console.log("=".repeat(60));

// Prompt the user to enter a Sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);

// Timming the sentences and splitting it into words based on "spaces"
 let words = answer.sentence.trim().split(" ");

 // Analyize of user input system
 console.log("=".repeat(60));
 console.log(chalk.bold("- Sentence Words:"));
 console.log(words);
 console.log(chalk.bold(`\n - Word Count: ${chalk.bold.red(words.length)}`));
 console.log("=".repeat(60));