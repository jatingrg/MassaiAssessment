const chalk = require('chalk');
console.log(chalk.blue('Hello World'));
console.log(chalk.yellow('Learning Chalk is fun!'));
console.log(chalk.black.bgYellow('Warning! Proceed with caution.'))
console.log(chalk.white.bgRed('Error! Something went wrong.'))
console.log(chalk.green('Sucess:')+""+chalk.white("Operation Completed!"))
console.log(chalk.cyan('Loading...')+""+chalk.magenta("Please Wait"))
const error = chalk.red;
const warning = chalk.hex('#ffA500');
const sucess = chalk.green;
console.log(error("Error: Unable to connect to the server!"));
console.log(warning("Warning: Low disk space!"));
console.log(sucess("Success: Data saved successfully!"));