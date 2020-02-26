const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

async function promptUser() {
    const userData = await inquirer
    .prompt([
        {
            type: "input",
            name: "githubName",
            message: "What is your GitHub user name?"
        },
        {
            type: "input",
            name: "projectTitle",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "projectDescription",
            message: "Provide a project description."
        },
        {
            type: "input",
            name: "projectInstallation",
            message: "Provide instructions on how to get the application to run."
        },
        {
            type: "input",
            name: "projectUsage",
            message: "What is the application used for?"
        },
        {
            type: "list",
            name: "projectLicense",
            message: "Which license will be used?",
            choices: [
                'ISC',
                'MIT',
                'GNU',
                'Apache'
            ]
        },
        {
            type: "input",
            name: "projectContributer",
            message: "Who are the contributers to the project?"
        },
        {
            type: "input",
            name: "projectTest",
            message: "What are the steps for testing?"
        }
    ])
}
promptUser();