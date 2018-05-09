"use strict"

const Controller = require('./controller.js')
const argv = process.argv
let tagCandidate = []
let command = argv[2].toLowerCase()
let command2
if(command.split(':').length>1){
    command2 = command.split(':')[1]
    command = command.split(':')[0]
}
for(let i = 4; i < argv.length; i++){
    tagCandidate.push(argv[i])
}
switch(command){
    case "help":
        View.help()
        break;
    case "list":
        Controller.getList(command2,argv[3])
        break;
    case "add":
        Controller.addTask(argv[3])
        break;
    case "findbyid":
        Controller.findById(argv[3])
        break;
    case "delete":
        Controller.deleteTask(argv[3])
        break;
    case "complete":
        Controller.completeTask(argv[3])
        break;
    case "uncomplete":
        Controller.uncompleteTask(argv[3])
        break;
    case "tag":
        Controller.addTag(argv[3],tagCandidate)
        break;
    case "untag":
        Controller.unTag(argv[3],tagCandidate)
        break;
    case "filter":
        Controller.filter(command2)
        break;
}
