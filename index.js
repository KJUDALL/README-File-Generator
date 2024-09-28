// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";
import Choices from "inquirer/lib/objects/choices.js";

// TODO: Create an array of questions for user input
const questions = [
    { name: 'title', message: 'What is the title of your app?' },
    { name: 'description', message: 'Provide a description of your app:' },
    { name: 'contents', message: 'To create your Table of Contents, hit enter.' },
    { name: 'installation', message: 'Provide installation instructions:' },
    { name: 'usage', message: 'How can I use this app?' },
    { name: 'license', type: 'list', message: 'Provide the necessary license:', choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'] },
    { name: 'tests', message: 'How can I test this app?' },
    { name: 'questions', message: 'Any additional questions?' },
    { name: 'github', message: 'For contacting purposes, enter your GitHub username:' },
    { name: 'email', message: 'Enter a good email to reach you at:' }
];

// TODO: Create a function to write README file
// const fs = require('fs');

function writeFile(fileName, data) {
    fs.writeFile('README.md', data, function (err) {
        if (err) throw err;
        console.log('Success! Your README file has been created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const markdown = generateMarkdown(answers);
        writeFile('README.md', markdown);
        console.log(markdown);
    });
}

// Function call to initialize app
init();
