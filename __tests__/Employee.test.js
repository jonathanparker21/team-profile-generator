const Employee = require('../lib/Employee')

describe('Employee', () => {

    it('should return the name of an employee', () => {

        const name = 'Jonathan'
        const person = new Employee(name)
        expect(person.name).toBe(name)

    })

})

describe('Employee', () => {

    it('should return the id of an employee', () => {

        const id = 1234567
        const number = new Employee('Jonathan', id)
        expect(number.id).toBe(id)

    })

})

describe('Employee', () => {

    it('should return the email of an employee', () => {

        const email = 'jonathan@email.com'
        const emailAddress = new Employee('Jonathan', 1234567, email)
        expect(emailAddress.email).toBe(email)

    })

})

describe('Employee', () => {

    it('should call the getName function', () => {

        const nameCall = 'Jonathan'
        const test = new Employee(nameCall)
        expect(test.getName()).toBe(nameCall)

    })

})

describe('Employee', () => {

    it('should call the getId function', () => {

        const idCall = 1234567
        const test = new Employee('Jonathan', idCall)
        expect(test.getId()).toBe(idCall)

    })

})

describe('Employee', () => {

    it('should call the getEmail function', () => {

        const emailCall = 'jonathan@email.com'
        const test = new Employee('Jonathan', 1234567, emailCall)
        expect(test.getEmail()).toBe(emailCall)

    })

})

describe('Employee', () => {

    it('should call the role function', () => {

        const roleCall = 'Software Engineer'
        const jobPosition = new Employee('Jonathan', 1234567, 'jonathan@email.com', roleCall)
        expect(jobPosition.getRole()).toBe(roleCall)

    })

})
