// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol='*') {
    return function(adjective = "special") {
        return `You are ${symbol}${adjective}${symbol}!`
    }
}

const Calculator = {
    add: function add(num1, num2) { return num1 + num2 },
    subtract: function subtract(num1, num2) {return num1 - num2 },
    multiply: function multiply(num1, num2) {return num1 * num2 },
    divide: function divide(num1, num2) {return num1 / num2 },
};

function actionApplyer(int, arr) {
    arr.forEach(fn => {
        int = fn(int);
    })
    return int;
}