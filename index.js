const fs = require("fs");
const inquirer = require("inquirer");

    inquirer.prompt([
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
    ])
    .then(answers => {
        console.info("Answer:", answers);
    });