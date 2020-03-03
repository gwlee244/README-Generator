const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

inquirer
 .prompt([
    {
        type: "input",
        name: "githubName",
        message: "What is your GitHub user name?",
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Provide a project description:",
    },
    {
        type: "input",
        name: "projectInstallation",
        message: "Provide instructions on how to get the application to run:",
    },
    {
        type: "input",
        name: "projectUsage",
        message: "What is the application used for?",
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
        name: "projectContributor",
        message: "Who are the contributors to the project?",
    },
    {
        type: "input",
        name: "projectTest",
        message: "What are the steps for testing?",
    },
])

.then (function(answer) {
    const queryUrl = `https://api.github.com/users/${answer.githubName}`
    axios.get(queryUrl).then(function(res){

    const readMe =`![license badge](https://img.shields.io/badge/license-${encodeURI(answer.projectLicense)}-blueviolet?style=flat-square&logo=appveyor)
    ![forthebadge](https://forthebadge.com/images/badges/designed-in-etch-a-sketch.svg)

# ${answer.projectTitle}

# ${answer.projectDescription}

## Table of Contents
\n* [Installation](#Installation)
\n* [Usage](#Usage)
\n* [License](#License)
\n* [Contributors](#Contributors)
\n* [Testing](#Testing)

## Installation
# ${answer.projectInstallation}
        
## Usage
# ${answer.projectUsage}
        
## License
# ${answer.projectLicense}
     
## Contributors
# ${answer.projectContributor}

## Testing
# ${answer.projectTest}

## Please submit any questions to:
# ![${res.data.html_url}](${res.data.avatar_url})


        `
    
    fs.writeFile("README.md", readMe, function(){
    });
    console.log("You successfully generated a README.md file!");
    })
});