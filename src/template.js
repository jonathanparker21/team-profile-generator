const generateTemplate = answers => {

// create manager html
const managerCard = manager => {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h1 class="card-title">${manager.getName()}</h1>
        <h1 class="card-title">${manager.getRole()}</h1>
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: ${manager.getEmail()}</li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
      </div>
    </div>
    `
}

// create engineer html
const engineerCard = engineer => {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h1 class="card-title">${engineer.getName()}</h1>
        <h1 class="card-title">${engineer.getRole()}</h1>
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
            </ul>
      </div>
    </div>
    `
}

//create intern html
const internCard = intern => {
    return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h1 class="card-title">${intern.getName()}</h1>
        <h1 class="card-title">${intern.getRole()}</h1>
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: ${intern.getEmail()}</li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
      </div>
    </div>
    `
}

const htmlGenerator = []
htmlGenerator.push(answers
    .filter(employee => {
        employee.getRole() === 'Manager'
    })
    .map(manager => {
        managerCard(manager)
    })
    )
htmlGenerator.push(answers
    .filter(employee => {
        employee.getRole() === 'Engineer'
    })
    .map(engineer => {
        engineerCard(engineer)
    })
    )
htmlGenerator.push(answers
    .filter(employee => {
        employee.getRole() === 'Intern'
    })
    .map(intern => {
        internCard(intern)
    })
    )
return htmlGenerator.join('')
}

module.exports = answers => {
    return 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profiles</title>
    </head>
    <body>
        <h1 class="text-center">
            Team Profiles
        </h1>
        ${generateTemplate(answers)}
    </body>
    </html>
    `
}
