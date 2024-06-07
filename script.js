n1 = 0;
n2 = 0;
operand = "";


display = document.querySelector("#display");

function add(num1, num2) {
    return num1 + num2
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

function operate(num1, num2, operand) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if(operand == "+") {
        return add(num1, num2)
    } else if (operand == "*") {
        return multiply(num1, num2)
    } else if (operand == "/") {
        if(num2 === 0) {
            return 'expected error';;
        } else {
        return divide(num1, num2);
    } }
    else {
        return subtract(num1, num2)
    }
}

function appendChar(val) {
    if (val == '*' || val == '/' || val == '-' || val == '+') {
        n1 = display.value;
        operand = val;
        display.value = "";
    } else {
        display.value += val;
    }
}

function calculate() {
    n2 = display.value;
    display.value = "";
    display.value = operate(n1, n2, operand);
}

function clearDisplay() {
    display.value = "";
    n1 = 0;
    n2 = 0;
    operand = '';
}

function deleteChar() {
    display.value = display.value.substring(0, display.value.length - 1);
}