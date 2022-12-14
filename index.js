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
        message: 'What is the title of the project? (required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue');
                return false;
            }
        }
    },
    // Description of project
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project. (required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description');
                return false;
            }
        }
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info to continue');
                return false;
            }
        }
    },
    // Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use project');
                return false;
            }
        }
    },
    // Contribution Guidlines
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project? (required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to the project');
                return false;
            }
        }
    },
    // Test Instructions 
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test this project');
                return false;
            }
        }
    },
    // License Options
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: [
            "GNU GPLv3",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "MIT License",
            "Boost Software License 1.0",
            "The Unlicense",
            "BSD 3-Clause"
        ]
    },
    // Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Information has been transfered to the README.')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
