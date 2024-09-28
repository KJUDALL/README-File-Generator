// TODO: Create a function that returns a license badge based on which license is passed in

import { cpuUsage } from "process";

// If there is no license, return an empty string
function renderLicensesBadge(licenses) {
  if (!licenses || licenses === 'None') {
    return '';
  } else {
    const licensesBadge = licenses.replace(/ /g, '%20');
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicensesLink(licenses) {
  if (!licenses || licenses === 'None') {
    return '';
  } else {
    const licensesLink = licenses.replace(/ /g, '-');
    return `https://opensource.org/licenses/${licensesLink}`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicensesSection(licenses) {
  if (!licenses || licenses === 'None') {
    return '';
  } else {
    return `## Licenses
    This project is licensed under the ${licenses} license. For more info, see [this link](${renderLicensesLink(licenses)}).`;
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
  - [Licenses](#licenses)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Licenses
  ${renderLicensesBadge(data.licenses)}
  ${renderLicensesSection(data.licenses)}
  ## Tests 
  ${data.tests}
  ## Questions
  ${data.questions}
  If any questions come up in the future, you can contact me directly at ${data.email}. If you would like to view this repo, or check out any of my other work, visit my GitHub at [${data.github}](https://github.com/${data.github}/)
    `;
}

export default generateMarkdown;
