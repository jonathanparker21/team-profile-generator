const Intern = require('../lib/Intern')

describe('Intern', () => {

    it('should return the school of an intern', () => {

        const school = 'Northwestern University'
        const schoolName = new Intern('Jonathan', 1234567, 'jonathan@email.com', school)
        expect(schoolName.getSchool()).toBe(school)

    })

})

describe('Intern', () => {

    it('should call the role function', () => {

        const roleCall = 'Intern'
        const jobPosition = new Intern('Jonathan', 1234567, 'jonathan@email.com', roleCall)
        expect(jobPosition.getRole()).toBe(roleCall)

    })

})