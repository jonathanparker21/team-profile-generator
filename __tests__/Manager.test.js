const Manager = require('../lib/Manager')

describe('Manager', () => {

    it('should return the office number of a manager', () => {

        const number = 123
        const officeNumber = new Manager('Jonathan', 1234567, 'jonathan@email.com', number)
        expect(officeNumber.getOfficeNumber()).toBe(number)

    })

})

describe('Manager', () => {

    it('should call the role function', () => {

        const roleCall = 'Manager'
        const jobPosition = new Manager('Jonathan', 1234567, 'jonathan@email.com', roleCall)
        expect(jobPosition.getRole()).toBe(roleCall)

    })

})