const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const http = require("http");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee =require(".lib/Employee");


const team = [];
let manager;
let teamTitle;

//manager info
function managerData() {
    inquirer.prompt([

    {
    name: "teamTitle",  
    type:"input",
    message: "What is the name of this team?",
    },

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
    }])
    .then(managerAnswers => {
    manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswer.officeNumber);
    teamTitle = managerAnswers.teamTitle;
    console.log("Now enter employee information.")
    otherEmployeeData();
    });
}

function otherEmployeeData() {
    inquirer.prompt([
    {
    name: "employeeRole",
    type: "list",
    choices: ["Engineer", "Intern"],
    message: "What is this employee's role on the team?"  
    },

    {
    name: "employeeName",
    type: "input",
    message: "What is the employee's name?"
    },

    {
    name:"employeeId",
    type: "input",
    message: "What is the employee ID?",
    },


    {
    name:"employeeEmail",
    type:"input",
    message:"What is the employee's email address?"
    },

    {
    name:"github",
    type:"input",
    input:"What is the Engineer's Github name?",
    when: (userInput) => userInput.employeeRole === "Engineer"
    },

    {
    name:"school",
    type:"input",
    message:"What is the name of the Intern's school?",
    when: (userInput) => userInput.employeeRole === "Intern"
    },

    {
    name:"newEmployee",
    type: "confirm",
    message:"Would you like to add another team member now?"
    // yes response questions repeat, no response renderHTML
    }

    ])
    .then(answers => {
        if (answers.employeeRole === "Intern") {
            const employee = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school);
            teamMembers.push(employee);
        }
        else if (answers.employeeRole === "Engineer"){
            teamMembers.push(new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github));
        }

        if (answers.newEmployee === true) {
            otherEmployeeData();
        }
        else {
            var main = fs.readFileSync("./dist/Team.html");
            main = main.replace (/{{teamTitle}}/g, teamTitle);
            // replaces Team Title name each time it occurs in output
           
            //create manager card
            var managerCard = fs.readFileSync("./dist/manager.html");
            managerCard = managerCard.replace("{{name}}", manager.getName());
            managerCard = managerCard.replace("{{role}}", manager.getRole());
            managerCard = managerCard.replace("{{id}}", manager.getId());
            managerCard = managerCard.replace("{{email}}", manager.getEmail());
            managerCard = managerCard.replace("{{officeNumber}}", manager.getOfficeNumber());

            //create employee cards
            var cards = managerCard;
            for (var i = 0; i < teamMembers.length; i++) {
                var employee = teamMembers[i];
                cards += renderEmployee(employee);
            }

            main = main.replace("{{cards}}", cards);

            fs.writeFileSync("./dist/Team.html");

            console.log("The team chart has been created in the dst folder.")
        }
    
    });
}

    function renderEmployee(employee) {
    if (employee.getRole() === "Intern") {
        var internCard = fs.readFileSync('./templates/Intern.html', 'utf8');
        internCard = internCard.replace('{{name}}', employee.getName());
        internCard = internCard.replace('{{role}}', employee.getRole());
        internCard = internCard.replace('{{id}}', employee.getId());
        internCard = internCard.replace('{{email}}', employee.getEmail());
        internCard = internCard.replace('{{school}}', employee.getSchool());
        return internCard;
    } else if (employee.getRole() === "Engineer") {
        var engineerCard = fs.readFileSync('./templates/Engineer.html', 'utf8');
        engineerCard = engineerCard.replace('{{name}}', employee.getName());
        engineerCard = engineerCard.replace('{{role}}', employee.getRole());
        engineerCard = engineerCard.replace('{{id}}', employee.getId());
        engineerCard = engineerCard.replace('{{email}}', employee.getEmail());
        engineerCard = engineerCard.replace('{{github}}', employee.getGithub());
        return engineerCard;
    }
}

init();