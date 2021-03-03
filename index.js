const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const { stringify } = require("querystring");
const generateManager = renderFile.createManager
const generateEngineer = renderFile.createEngineer
const generateIntern = renderFile.createIntern
const renderTeam = renderFile.renderMembers

inquirer.prompt()

const team = [
    {
    name: "mgrname",
    type: "input",
    message: "Please enter the name of the manager.",
    },

    {
    name: "empid",
    type: "input",
    message: "Please enter employee id",
    },

    {
    name: "email",
    type: "input",
    message: "Please enter email address",
    },

    {
    name: "office",
    type: "input",
    message: "What is your office number?",
    },

    {
    name:"emp-type",
    type: "confirm",
    message: "Would you like to add a team member?",
    },

.then((answer) => {

}))
    message,

    //choices: ["engineer", "intern", "all finished, build my team"]
    },
    .then ((res)) => {
        if (res.start ===)
    }


]
])
function writeToFile (data) {
    const Myteam = buildMyteam (data)
    fs.writeFileSync ("./dist/buildMyteam.js", Myteam, error =>{
        if (error) console.log(error)
    })
}

function init() {inquirer.prompt(team).then(data => {
    writeToFile(data)
})}

init();