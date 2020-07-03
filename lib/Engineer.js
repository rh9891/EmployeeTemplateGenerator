const Employee =  require("./Employee");

// Code written to define and export the Engineer class. It is inherited from Employee and extends the class.
class Engineer extends Employee {
    constructor(name, id, email, Github) {
        super(name, id, email);
        this.Github = Github;
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
        return this.Github
    }

    getRole() {
        return "Engineer"
    }
};

module.exports = Engineer;
