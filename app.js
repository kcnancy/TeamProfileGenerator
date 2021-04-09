const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeamHtml = require ("./src/generateTeamHtml");


const engineers = [];
const interns = [];

//write HTML function
function writeToFile(fileName, createTeam) {
    fs.writeFile('./dist/TeamHtml.html', createTeam, (err) =>
    err ? console.log(err) : console.log('Team Profile Successfully Created in dist folder')
    );
}

//manager info
function managerData() {
    inquirer.prompt([

    {
    name: "managerName",
    type: "input",
    message: "Please enter the name of the manager.",
    },

    {
    name: "managerId",
    type: "input",
    message: "Please enter managers employee id",
    },

    {
    name: "managerEmail",
    type: "input",
    message: "Please enter email address",
    },

    {
    name: "officeNumber",
    type: "input",
    message: "What is your office number?",
    }
])
    .then(managerData => {
        manager = new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.officeNumber);
        nextTeamMember();

    });
}

//non-manager employee data prompts
function nextTeamMember() {
    inquirer.prompt([
    {
    name: "role",
    type: "list",
    choices: ["Engineer", "Intern", "Team is Complete"],
    message: "What is this employee's role on the team?"
    }
    ])

    .then(nextTeamMember => {
        switch (nextTeamMember.role) {
            case 'Engineer':
                engineerData();
                break;
            case 'Intern':
                internData();
                break;
            case 'Team is Complete':
                const createTeam = generateTeamHtml(manager, engineers, interns);
                writeToFile('./dist/TeamHtml', createTeam);
    }
        })
    }

        function engineerData() {
            inquirer.prompt([
                {
                name: "name",
                type: "input",
                message: "What is the Engineer's name?"
                },
                {
                name: "id",
                type: "input",
                message: "What is the Engineer's ID number?"
                },
                {
                name: "email",
                type: "input",
                message: "What is the Engineer's email?"
                },
                {
                name: "github",
                type: "input",
                message: "What is the Engineer's Github name?"
                }
            ])
            .then(engineerData => {
                const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
                engineers.push(engineer);
                nextTeamMember();
            })
        }
        function internData() {
            inquirer.prompt([
                {
                name: "name",
                type: "input",
                message: "What is the Intern's name?"
                },
                {
                name: "id",
                type: "input",
                message: "What is the Intern's ID number?"
                },
                {
                name: "email",
                type: "input",
                message: "What is the Intern's email?"
                },
                {
                name: "school",
                type: "input",
                message: "What is the school name?"
                },
            ])
            .then(internData => {
                const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
                interns.push(intern);
                nextTeamMember();
            })
        }

        //to initialize app
        managerData();
