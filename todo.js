const Controller = require('./controller.js')



var commandArgv = process.argv;
var command = commandArgv[2]
var value = commandArgv[3]

var arrTag = [];

for(let a = 0; a< commandArgv.length; a++){
    if(a > 3){
        arrTag.push(commandArgv[a])
    }
}

switch(command){
    case 'help' : {Controller.help(); break}
    case 'list' : {Controller.listTask(); break}
    case 'add'  : {Controller.addTask(value); break}
    case 'findById' : {Controller.findId(value);break}
    case 'delete' : {Controller.delete(value);break}
    case 'completed' : {Controller.completed(value, true);break}
    case 'uncompleted' : {Controller.completed(value, false);break}
    case 'list:created' : {Controller.sortByCreated(value);break}
    case 'list:completed' : {Controller.sortByCompleted(value);break}
    case 'list:tag' : {Controller.addTag(value, arrTag);break}
    case 'filter' : {Controller.findTag(value);break}
    
}


 

