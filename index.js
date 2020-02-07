
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
    const team = require("HTMLTemplates/index.html")
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
    // async function init() {
    //     console.log("hi")
    //     try {
    //         const answers = await promptUser();
      
    //         const html = generateHTML(answers);
    //       //writeFile will creat html page with the answers
    //         await writeFileAsync("index.html", html);
      
    //         console.log("Successfully wrote to index.html");
    //     } catch (err) {
    //         console.log(err);
    //     }
    //   }
      
    //   init();
            
        