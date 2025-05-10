const sum = require("./sum");
const multiply = require("./multiplication");
const subtract = require("./subtraction");
const divide = require("./division");

let sumA = 3;
let sumB = 5;
let sumResult = sum(sumA, sumB);
console.log("Sum:", sumResult);

let mulA = 4;
let mulB = 6;
let mulResult = multiply(mulA, mulB);
console.log("Multiplication:", mulResult);

let subA = 10;
let subB = 7;
let subResult = subtract(subA, subB);
console.log("Subtraction:", subResult);

let divA = 20;
let divB = 0;
let divResult = divide(divA, divB);
console.log("Division:", divResult);
