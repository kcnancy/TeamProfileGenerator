const Employee = require("*/Employee")

class Engineer extends Employee {
    constructor(name, id, email, officeNumber){
     super(name, id, email);
     this.github = this.github;
    }
getGithub(){
    return this.github;
    }
getRole(){
    return "Engineer"
    }
}

module.exports = Engineer;