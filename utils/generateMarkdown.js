// TODO: Create a function that returns a license badge based on which license is passed in

import { cpuUsage } from "process";

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  } else {
    const licenseBadge = license.replace(/ /g, '%20');
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  } else {
    const licenseLink = license.replace(/ /g, '-');
    return `https://opensource.org/licenses/${licenseLink}`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  } else {
    return `## License
    This project is licensed under the ${license} license. For more info, see [this link](${renderLicenseLink(license)}).`;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description 
  ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ## Tests 
  ${data.tests}
  ## Questions
  ${data.questions}
  If any questions come up in the future, you can contact me directly at ${data.email}. If you would like to view this repo, or check out any of my other work, visit my GitHub at [${data.github}](https://github.com/${data.github}/).
    `;
}

export default generateMarkdown;
