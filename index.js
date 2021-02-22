const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const team = [

    {name: "mgrname",
    type: "input",
    message: "Please enter the name of the manager.",
    },

    {name: "empid",
    type: "input",
    message: "Please enter employee id",
    },
    {name: "email",
    type: "input",
    message: "Please enter email address",
    }

]