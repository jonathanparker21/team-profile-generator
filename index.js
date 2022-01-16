const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const { pageTemplate } = require('./src/template');

var answers = [];

function questions() {

    inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeRole',
                message: 'Please enter the employee position.',
                choices: [ 'Manager', 'Engineer', 'Intern' ]
            },
            {
                type: 'input',
                name: 'name',
                message: 'Please enter an employee name.'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the employee ID.'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the employee email address.'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter the employee office number.',
                when: (response) => response.employeeRole === 'Manager',
            },
            {
                type: 'input',
                name: 'gitHubUsername',
                message: 'Please enter the engineer GitHub username.',
                when: (response) => response.employeeRole === 'Engineer',
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the intern school.',
                when: (response) => response.employeeRole === 'Intern',
            }
        ])
        .then ((response) => {
            if (response.employeeRole === 'Manager') {
                answers.push(
                    new Manager(
                        response.name,
                        response.id, 
                        reponse.email,
                        reponse.officeNumber
                    )
                )
            } else if (response.employeeRole === 'Engineer') {
                answers.push(
                    new Engineer(
                        response.name,
                        response.id, 
                        reponse.email,
                        reponse.gitHubUsername
                    )
                )
            } else if (response.employeeRole === 'Intern') {
                answers.push(
                    new Intern(
                        response.name,
                        response.id, 
                        reponse.email,
                        reponse.school
                    )
                )
            }
            inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'addEmployees',
                    message: 'Would you like to add more employees?',
                    choices: [ 'Yes', 'No' ]
                }
            ])
            .then((finalAnswer) => {
                if (finalAnswer.addEmployees === 'Yes') {
                    questions();
                } else {
                    fs.writeFile('team-profile.html', pageTemplate(answers), (err) => {
                        if (err) {
                            console.log('There was an error writing the file.' + err)
                        } else {
                            console.log('Page successfully written.')
                        }
                    })
                }
            })
        })
} [
];

questions();
