// TODO: Include packages needed for this application
const inquirer = require("inquirer");
var fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// const { writeFile, copyFile } = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "what is the title of your project?",
    validate: (projectInput) => {
      if (projectInput) {
        return true;
      } else {
        console.log("Please enter the title of your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your project?",
    validate: (instructionInput) => {
      if (instructionInput) {
        return true;
      } else {
        console.log(
          "Please provide instructions so that others may be able to view your project."
        );
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide any information about the usage of your project:",
  },
  {
    type: "list",
    name: "licence",
    message: "Which licence are you using?",
    choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
  },
  {
    type: "input",
    name: "credits",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide guidlines for contributors:",
  },
  {
    type: "input",
    name: "testing",
    message: "Please provide any instructions for testing your app:",
  },
  {
    type: "input",
    name: "username",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file

function writeForFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
    console.log("Your file is complete!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeForFile("README2.md", generateMarkdown(data));
  });
}

// TODO: Create a function to initialize app
//function init(questions) {
// inquirer
// .prompt(questions)
// .then(function (data) =>
//  writeToFile("README2.md", generateMarkdown(data), "README file complete")
// );
//}

// Function call to initialize app
init();
