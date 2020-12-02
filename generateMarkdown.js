// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Introduction
${data.description}

## Table Of Contents
* [Installation Instructions](#Installations)
* [Usage Information](#Usage)
* [Contribution Guidelines](#Contribution)
* [Illustration](#Illustration)
* [Credits](#Credits)
* [License](#License)

## Installation Guidelines
\`\`\`
${data.installation}
\`\`\`

## Usage Information
\`\`\`
* ${data.usage}
\`\`\`

## Contribution Guidelines
\`\`\`
* ${data.contributions}
\`\`\`

## Illustration
![Demo](${data.illustration})

## Credits
\`\`\`
${data.credits}
\`\`\`

## License
https://opensource.org/licenses/${data.license.choices}
`}

module.exports = generateMarkdown;
