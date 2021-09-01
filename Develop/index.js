// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// const { writeFile, copyFile } = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Title of Your Project",
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
      name: "Description",
      message: "Please provide a brief description of your project",
    },
    {
      type: "input",
      name: "Installation-instruction",
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
      name: "Usage",
      message:
        "Please provide any information about the usage of your project:",
    },
    {
      type: "input",
      name: "Credits",
      message:
        "List your collaborators, if any, with links to their GitHub profiles.",
    },
    {
      type: "input",
      name: "Contribution",
      message: "Please provide guidlines for contributors:",
    },
    {
      type: "input",
      name: "Testing",
      message: "Please provide any instructions for testing your app:",
    },
  ]);
};

// TODO: Create a function to write README file
// function writeFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  console.log("Hello, welcome to the README file generator! Let's begin!");
}

// Function call to initialize app
init(questions);
