
const inquirer = require("inquirer");
const test = require("test");
const fs = require("fs");
// const generateHTML = require("./generateHTML")
const util = require("util");
// const employee = require ("./lib/employee.js");
// const engineer = require ("./lib/engineer.js");
// const intern = require ("./lib/intern.js");
// const manager = require ("./lib/manager.js");

const jest = require("jest");

inquirer
//User prompt in the terminal

function promptUser() {
    return inquirer.prompt([{
        type: "input",
        message: "What is your name?",
        //object to call from on input to generate user specified github portfolio
        name: "name",

    },
    {
        type: "input",
        message: "What is your ID number?",
        //object to call from on input to generate user specified github portfolio
        name: "id",
    },
    {
        type: "input",
        message: "What is your email address?",
        //object to call from on input to generate user specified github portfolio
        name: "email",

    },
    {
        //specifies type of question
        type: "list",
        message: "What is your position?",
        //object to call from on input to generate user specified github portfolio
        choices: ["manager", "employee","engineer","intern"],
        name: "position",

    },
    // .then (userChoice => {
    //     if (userChoice === "manager") { 
    //         addManager ()
    //     } 
    // }),
    
    {
        type: "input",
        message: "What is your office number?",
        name: "office",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your alma mater?",
        name: "school",
    },



    ]);

}

promptUser()
.then(function ({ name, id, email, position, office, username, school }) {
    const team = name
    .get(team).then(function (res) {
                //this will console log the users responses
                console.log(res);
                data = {
                    position: res.data.name,
                    id: res.data.id,
                    email: res.data.email,
                    position: res.data.position,
                    office: res.data.office,
                    username: res.data.username,
                    school: res.data.school
                }

            });
    })
    function generateHTML(data) {
        // console.log(data)
        return `<!DOCTYPE html>
            <html lang="en">
        
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
                <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                </link>
                <title>Document</title>
        
                <style>
                    .card-header {
                        background-color: rgb(198, 214, 250)
                    }
        
                    .card {
                        box-shadow: 5px 10px lightgray;
                    }
        
                    .card-columns {
                        @include media-breakpoint-only(lg) {
                            column-count: 4;
                        }
        
                        html,
                        body {
                            padding: 20px;
                            margin: 20px;
                        }
        
                        html,
                        body,
                        .wrapper {
                            height: 100%;
                        }
                </style>
            </head>
        
            <body>
        
                <div class="wrapper">
                    <div class="card text-center">
                        <div class="card-header card border-dark mb-4">
                            <h5>My Team</h5>
                        </div>
                        <div class="card-body">
        
                            <div class="row row-cols-1 row-cols-md-3">
                                <div class="col mb-4">
                                    <div class="card border-dark mb-4" style="width: 19rem;">
                                        <div class="card-header">
                                            <h5>${answers.nameManager}</h5>
                                            <h5><i class="fas fa-mug-hot"></i>Manager</h5>
                                        </div>
                                        <div class="card-body text-dark">
                                            <div class="card" style="width: 16rem;">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item" style="text-align:left"><strong>ID: </strong>${answers.idManager ?answers.idManager : " "}</li>
                                                    <li class="list-group-item" style="text-align:left"><strong>Email: </strong>${answers.emailManager ? answers.emailManager : " "}</li>
                                                    <li class="list-group-item" style="text-align:left"><strong>Office: </strong>${answers.officeManager? answers.officeManager : " "}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="col mb-4">
                                    <div class="card border-dark mb-4" style="width: 19rem;">
                                        <div class="card-header">
                                            <h5>${answers.nameEngineer1}</h5>
                                            <h5><i class="fas fa-glasses"></i>Engineer</h5>
                                        </div>
                                        <div class="card-body text-dark">
                                            <div class="card" style="width: 16rem;">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item" style="text-align:left"><strong>ID: </strong>${answers.idEngineer1}</li>
                                                    <li class="list-group-item" style="text-align:left"><strong>Email: </strong>${answers.emailEngineer1}</li>
                                                    <li class="list-group-item" style="text-align:left"><strong>Github: </strong>${answers.githubEngineer1}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="col mb-4">
                                    <div class="card border-dark mb-4" style="width: 19rem;">
                                        <div class="card-header">
                                            <h5>${answers.nameEngineer2}</h5>
                                            <h5><i class="fas fa-glasses"></i>Engineer</h5>
                                        </div>
                                        <div class="card-body text-dark">
                                            <div class="card" style="width: 16rem;">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item" style="text-align:left"><strong>ID: </strong>${answers.idEngineer2}</li>
                                                    <li class="list-group-item" style="text-align:left"><strong>Email: </strong>${answers.emailEngineer2}</li>
                                                    <li class="list-group-item" style="text-align:left"><strong>Github: </strong>${answers.githubEngineer2}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="col mb-4">
                                    <div class="card border-dark mb-4" style="width: 19rem;">
                                        <div class="card-header">
                                            <h5>${answers.nameEngineer3}</h5>
                                            <h5><i class="fas fa-glasses"></i>Engineer</h5>
                                        </div>
                                        <div class="card-body text-dark">
                                            <div class="card" style="width: 16rem;">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item" style="text-align:left"><strong>ID: </strong>${answers.idEngineer3}</li>
                                                    <li class="list-group-item" style="text-align:left"><strong>Email: </strong>${answers.emailEngineer3}</li>
                                                    <li class="list-group-item" style="text-align:left"><strong>Github: </strong>${answers.githubEngineer3}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="col mb-4">
                                    <div class="card border-dark mb-4" style="width: 19rem;">
                                        <div class="card-header">
                                            <h5>${answers.nameIntern}</h5>
                                            <h5><i class="fas fa-user-graduate"></i>Intern</h5>
                                        </div>
                                        <div class="card-body text-dark">
                                            <div class="card" style="width: 16rem;">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item" style="text-align:left"><strong>ID: </strong>${answers.idIntern}</li>
                                                    <li class="list-group-item" style="text-align:left"><strong>Email: </strong>${answers.emailIntern}</li>
                                                    <li class="list-group-item" style="text-align:left"><strong>Lindkedin: </strong>${answers.linkedinIntern}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                        </div>
                    </div>
                </div>
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                    crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                    crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                    crossorigin="anonymous"></script>
            </body>
        
            </html>`;
    }
    
        
            module.exports = generateHTML            
        