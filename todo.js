const argv = process.argv;
// const View = require('./view/view.js')
const Controller = require('./controller/controller.js')

let controller = Controller.getDisplay(argv);
return controller;
// console.log(argv)