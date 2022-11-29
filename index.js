// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    // Project name
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project you are working on? (required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },
    // Description of project
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description!');
                return false;
            }
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
