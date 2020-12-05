// function to generate markdown for README
function generateMarkdown(data) {
  return `

![License Badge](https://img.shields.io/badge/license-${data.license}-blue.svg)
[![Contributor Covenant Badge](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

# ${data.title}

## Description
${data.description}

## Table Of Contents
1. [Links](#Links)
1. [Installation Instructions](#Installations)
1. [Usage Information](#Usage)
1. [Contribution Guidelines](#Contribution)
1. [Illustration](#Illustration)
1. [Credits](#Credits)
1. [License](#License)

## Links
[Github Repository](https://github.com/${data.username})

## Installation Guidelines
* ${data.installations}

## Usage Information
* ${data.usage}

## Contribution Guidelines
* Contact Me at ${data.email}

[Contributor Covenant Text](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.txt)


## Illustration
![Demo](${data.illustration})

## Credits
* ${data.credits}

## License
[License Note](https://opensource.org/licenses/${data.license})

`}

module.exports = generateMarkdown;
