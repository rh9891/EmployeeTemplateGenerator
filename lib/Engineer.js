const Employee =  require("./Employee");

// Code written to define and export the Engineer class. It is inherited from Employee and extends the class.
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
};

module.exports = Engineer;
