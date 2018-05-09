
const View = require('./view.js')
const Model = require('./model.js')
const Controller = require('./controller.js')

let argv = process.argv
let command = argv[2]



switch(command){
    case 'help' :{ View.helpList();break}
    case 'list' :{ Controller.getListTask();break}
    case 'add'  :{ Controller.addListTask(process.argv[3]);break}
    case 'delete' : { Controller.delListTask(process.argv[3]);break}
    case 'complete' : { Controller.completeTask(process.argv[3]);break}
    case 'uncomp' : {Controller.unCompleteTask(process.argv[3]);break}
    case 'listComp' : {Controller.listCompleteTask(process.argv[3]);break}
    case 'find' : {Controller.idFind(process.argv[3]);break}
}

module.exports = command