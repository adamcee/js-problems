/***
 * Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
 *
 *
 calculator(2, "+", 2) ➞ 4
 calculator(2, "*", 2) ➞ 4
 calculator(4, "/", 2) ➞ 2

    EDGE CASE:
    If the input tries to divide by 0, return: "Can't divide by 0!"
 */

const ADD = "+";
const SUBTRACT = "-";
const DIVIDE = "/";
const MULTIPLY = "*";

function divide(num1, num2) {
    // Check for and Handle divide by 0. Example: 3 / 0. Bad :)
    if (num2 === 0) {
        return "Can't divide by 0!";
    }

    // Otherwise divide and return result
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    switch(operator) {
        case ADD:
            return num1 + num2;
        case SUBTRACT:
            return num1 - num2;
        case MULTIPLY:
            return num1 * num2;
            // TODO: Handle edge case of dividing by 0
        case DIVIDE:
            return divide(num1, num2);
        default:
            return "Error, bad operator" + operator;
    }
}

console.log(calculator(2,3, "+"));
console.log(calculator(2,3, "-"));
console.log(calculator(2,0, "/"));
console.log(calculator(2,0, "*"));
console.log(calculator(2,3, "/"));
console.log(calculator(2,3, "BADSYMBOL"));
