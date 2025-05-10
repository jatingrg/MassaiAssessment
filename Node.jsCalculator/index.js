
const crypto = require("crypto");

const args = process.argv.slice(2); 
const operation = args[0]; 

function performOperation(op, args) {
  switch (op) {
    case "add": {
      const numbers = args.map(Number);
      if (numbers.some(isNaN)) {
        return "Invalid numbers for addition.";
      }
      const result = numbers.reduce((a, b) => a + b, 0);
      return `Result: ${result}`;
    }

    case "sub": {
      const numbers = args.map(Number);
      if (numbers.length < 2 || numbers.some(isNaN)) {
        return "Invalid numbers for subtraction.";
      }
      const result = numbers.reduce((a, b) => a - b);
      return `Result: ${result}`;
    }

    case "mult": {
      const numbers = args.map(Number);
      if (numbers.some(isNaN)) {
        return "Invalid numbers for multiplication.";
      }
      const result = numbers.reduce((a, b) => a * b, 1);
      return `Result: ${result}`;
    }

    case "divide": {
      const numbers = args.map(Number);
      if (numbers.length < 2 || numbers.some(isNaN)) {
        return "Invalid numbers for division.";
      }
      if (numbers.slice(1).includes(0)) {
        return "Division by zero is not allowed.";
      }
      const result = numbers.reduce((a, b) => a / b);
      return `Result: ${result}`;
    }

    case "sin": {
      const num = Number(args[0]);
      if (isNaN(num)) return "Invalid number for sine operation.";
      return `Result: ${Math.sin(num)}`;
    }

    case "cos": {
      const num = Number(args[0]);
      if (isNaN(num)) return "Invalid number for cosine operation.";
      return `Result: ${Math.cos(num)}`;
    }

    case "tan": {
      const num = Number(args[0]);
      if (isNaN(num)) return "Invalid number for tangent operation.";
      return `Result: ${Math.tan(num)}`;
    }

    case "random": {
      const length = Number(args[0]);
      if (isNaN(length) || length <= 0) {
        return "Provide length for random number generation.";
      }
      const bytes = crypto.randomBytes(length);
      return `Random (binary): ${bytes.toString("binary")}`;
    }

    default:
      return "Invalid operation";
  }
}

const output = performOperation(operation, args.slice(1));
console.log(output);
