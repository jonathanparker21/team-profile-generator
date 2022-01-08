const Engineer = require('../lib/Engineer')

describe('Engineer', () => {

    it('should return the github of an engineer', () => {

        const github = 'jprkr21'
        const githubName = new Engineer('Jonathan', 1234567, 'jonathan@email.com', github)
        expect(githubName.getGithub()).toBe(github)

    })

})

describe('Engineer', () => {

    it('should call the role function', () => {

        const roleCall = 'Engineer'
        const jobPosition = new Engineer('Jonathan', 1234567, 'jonathan@email.com', roleCall)
        expect(jobPosition.getRole()).toBe(roleCall)

    })

})