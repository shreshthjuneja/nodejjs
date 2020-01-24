const fs = require('fs'); /// using fs module

const vv = require('./utils.js'); // import another file 

const validator = require("validator");

const chalk = require('chalk');

console.log(chalk.yellow('Hello')+' world '+ chalk.blue('!!'));

console.log(validator.isURL('www.edd.com'));

fs.writeFileSync('notes1.txt', 'Bangalore'); // writeFileSync uses 2 modules (filename, text to input in file)

vv();   // call function  from utils.js