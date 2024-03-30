#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your Number", type: "number", name: "firstNamber" },
    { message: "enter First Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNamber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNamber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNamber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNamber / answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
