const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

inquirer.prompt([
    {   type: "input",
        name: "name",
        message: "What is your manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your manager's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your manager's email address?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?",
    }
]).then(function(answers) {
    let newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    employees.push(newManager);
    moreEmployees();
});

const newEmployee = {
        type: "list",
        name: "newEmployee",
        message: "Which type of team member would you like to add?",
        choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members."
        ]
};

const makeEngineer = [
    {   type: "input",
        name: "name",
        message: "What is your engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your engineer's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer's email address?",
    },
    {
        type: "input",
        name: "Github",
        message: "What is your engineer's Github profile name?",
    }
];

const makeIntern = [
    {   type: "input",
        name: "name",
        message: "What is your intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your intern's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your intern's email address?",
    },
    {
        type: "input",
        name: "school",
        message: "What school does your intern attend?",
    }
];

function moreEmployees() {
    inquirer.prompt(newEmployee).then(function(answers) {
        if(answers.newEmployee == "Engineer") {
            newEngineer();
        }
        if(answers.newEmployee == "Intern") {
            newIntern();
        }
        if(answers.newEmployee == "I don't want to add any more team members.") {
            fs.writeFile(outputPath, render(employees), function (err) {
                if (err) throw err;
                console.log("Success! You have generated your employee templates!")
            })
        }
})};

function newEngineer() {
    inquirer.prompt(makeEngineer).then(function(answers) {
    let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.Github)
    employees.push(newEngineer);
    moreEmployees();
}
)};

function newIntern() {
    inquirer.prompt(makeIntern).then(function(answers) {
    let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
    employees.push(newIntern);
    moreEmployees();
}
)};