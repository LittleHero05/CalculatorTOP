const { displayvideo } = require("googleapis/build/src/apis/displayvideo");

n1 = 0;
n2 = 0;
operand = "";

display = document.querySelector("#display");

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function appendChar(char) {
    display.text
}