const controller = require('./controller.js');
var commands = process.argv;

switch (commands[2]) {
  case 'help':
    // var newHelp = new controller;
    controller.help();
    break;
  case 'list':
    controller.list();
    break;
  case 'add':
    controller.add(commands[3]);
    break;
  case 'findById':
    controller.findById(commands[3]);
    break;
  case 'delete':
    controller.delete(commands[3]);
    break;
  case 'complete':
    controller.Complete(commands[3]);
    break;
  case 'uncomplete':
    controller.uncomplete(commands[3]);
    break;
  case 'list:created':
    controller.createdList(commands[3]);
    break;
  case 'list:outstanding':
    controller.outstandingList(commands[3]);
    break;
  case 'list:completed':
    controller.completedList();
    break;
  default: console.log('perintah salah');

}
