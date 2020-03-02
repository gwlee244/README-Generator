const fs = require("fs");
const inquirer = require("inquirer");
//const axios = require("axios");
const {gitUser} = require("./gitApi.js");

const userInput = [
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
        message: "Provide a project description:"
    },
    {
        type: "input",
        name: "projectInstallation",
        message: "Provide instructions on how to get the application to run:"
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
    ];
    
function writeToFile() {
    inquirer.prompt(userInput).then(results => {
            gitUser(results.githubName).then(({ data }) => {
                console.log(data);
                fs.writeFile('test.md', generateReadMe({ ...data, ...results }), function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("Successful write!");
                });
            })
        });
}

writeToFile();

function generateReadMe(data) {
    const badge = () => {
        if (data.projectLicense !== "None")
            return `![license badge] (https://img.shields.io/badge/license-${encodeURI(data.projectLicense)}-blueviolet?style=flat-square&logo=appveyor)`
            return ''
    }

    return `
    # ${data.projectTitle}

    ${badge()}

    # ${data.projectDescription}

    # Table of Contents
    1. [Installation](#Installation)
    2. [Usage](#Usage)
    3. [License](#License)
    4. [Contributers](#Contributers)
    5. [Testing](#Testing)

    1. Installation
    ${data.projectInstallation}
    2. Usage
    ${data.projectUsage}
    3. License
    ${data.projectLicense}
    4. Contributers
    ${data.projectContributer}
    5. Testing
    ${data.projectTest}

    ![picture](${data.avatar_url})
    `;
    }
