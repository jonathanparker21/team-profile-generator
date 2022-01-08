const Employee = require('./Employee');

// school

// getSchool()

// getRole()—overridden to return 'Intern'

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email),
        this.school = school
    }

    getSchool() { return this.school }
    getRole() { return 'Intern' }

}

module.exports = Intern