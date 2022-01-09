const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const { pageTemplate } = require('./src/template')
var answers = []

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

const questions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'Please enter an employee name.'
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'Please enter the employee ID.'
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Please enter the employee email address.'
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: 'Please enter the employee position.',
        choices: [ 'Manager', 'Engineer', 'Intern' ]
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the employee office number.'
    },
    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'Please enter the engineer GitHub username.'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter the intern school.'
    },
];

function writeToFile(answers) {
    
    fs.writeFile('./Team.html', pageTemplate(answers)), (err) =>
            err ? console.error(err) : console.log('Generating HTML!');

}

function init() {

    inquirer.prompt(questions)
    .then((res) => {
        if (res.role === 'Manager') {
            answers.push(new Manager(res.name, res.id, res.email, res.officeNumber))
        } else if (res.role === 'Engineer') {
            answers.push(new Engineer(res.name, res.id, res.email, res.gitHubUsername))
        } else if (res.role === 'Intern') {
            answers.push(new Intern(res.name, res.id, res.email, res.school))
        }
        inquirer.prompt([
            {
                type: 'list',
                name: 'finalQuestion',
                message: 'Would you like to add more employees?',
                choices: [ 'Yes', 'No']
            }
        ])
        .then((final) => {
            if (final.finalQuestion === 'Yes') {
                init() // calling init function to continue adding more employees
            } else if (final.finalQuestion === 'No') {
                writeToFile(answers) // when finished with questions, will write to the HTML file
            }
        })
    })

}

init();
