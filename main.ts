#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
{ message: "Enter your number",name: "firstnumber", type: "number",},
{ message : "Enter your number", name:"secondnumber",type: "number"},
 {
    message:"select one of the operator to perfrom action",
    type:"list",
    name:"operator",
    choices: [  "subtraction","Addition",  "Division" , " multiplication"]
 }

])
if(answer.operator === "subtraction"){
    console.log(answer.firstnumber - answer.secondnumber)
}else if(answer.operator === "Addition"){
    console.log(answer.firstnumber + answer.secondnumber)
}else if (answer.operator === "Division"){
    console.log(answer.operator.firstnumber / answer.secondnumber)
}else if(answer.operator === "multiplication"){
    console.log(answer.firstnumber * answer.secondnumber)
}else{
    console.log("invaild number");
}