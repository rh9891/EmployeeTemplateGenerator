// Code written to define and export the Engineer class. It is inherited from Employee and extends the class.
class Engineer extends Employee {
    constructor(name, id, email, Github) {
        super(name, id, email);
        this.Github = Github;
    }
}
