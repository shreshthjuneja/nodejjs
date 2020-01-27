const fs = require('fs'); /// using fs module

const vv = require('./utils.js'); // import another file 

const validator = require("validator");

const chalk = require('chalk');

console.log(chalk.inverse.yellow.bold('Hello')+chalk.bold(' world ')+ chalk.bold.blue('!!'));

console.log(validator.isURL('www.edd.com'));

fs.writeFileSync('notes1.txt', 'Bangalore'); // writeFileSync uses 2 modules (filename, text to input in file)

vv();   // call function  from utils.js