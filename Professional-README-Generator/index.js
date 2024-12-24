// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the specific installation instructions for your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information for this project?",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application below:",
        choices: ["MIT", "GPLv3", "Apache 2.0", "BSD 3-Clause", "None"],
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines for the Github community around your project?",
    },
    {
        type: "input",
        name: "tests",
        message: "What are the testing instructions for your application to ensure it is working?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("An error has occured with this application", err);
        } else {
            console.log("Congratulations, your beautiful new README is now created for your project. Thank you for using this application!");
        };
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile("README.md", markdown);
    });
}

// Function call to initialize app
init();
