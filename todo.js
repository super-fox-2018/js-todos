'use strict'

const Controller = require('./controller');

let command = process.argv.splice(2,2)
// let command = process.argv

// console.log(command[0]);
Controller.help(command);
