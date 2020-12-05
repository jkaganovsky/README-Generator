const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
inquirer
    .prompt([
        {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        },
        {
        type: 'input',
        message: 'Write a short description about your project.',
        name: 'description',
        },
        {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installations',
        },
        {
        type: 'input',
        message: 'Provide instructions and examples for using your project.',
        name: 'usage',
        },
        {
        type: 'input',
        message: 'What is the link to preview your work?',
        name: 'illustration',
        },
        {
        type: 'input',
        message: 'Who do you give credit for the completion of your project?',
        name: 'credits',
        },
        {
        type: 'list',
        message: 'Which license would you like to add to your project?',
        choices: [
                "Apache-2.0",
                "BSD-3-Clause",
                "BSD-2-Clause",
                "GPL",
                "LGPL",
                "MIT",
                "MPL-2.0",
                "CDDL-1.0",
                "EPL-2.0"
                ],
        name: 'license',
        },

    ])
    .then((response) => {

        fs.writeFile( "README_OUTPUT.md", generateMarkdown(response), (err) =>
        err ? console.error("Failed to create a README file.") : console.error("New README file created!")
        );
        }
    );