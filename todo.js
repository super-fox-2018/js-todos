const Controller = require("./controller.js")
let argv = process.argv
let todo = argv[2]
let task = argv[3]
let id = argv[3]
let theTag = argv[4]
let filt = argv[3]

    if(todo === 'help') {
        Controller.help()
    }
    else if(todo === 'list') {
        Controller.list()
    }
    else if(todo ==='add' && task !==undefined) {
        Controller.addTask(task)
    }
    else if(todo === 'findById' && id !== undefined){
        Controller.findById(id)
    }
    else if(todo === 'delete' && id !== undefined){
        Controller.deleteId(id)
    }
    else if(todo === 'complete' && id !== undefined){
        Controller.complete(id)
    }
    else if(todo === 'uncomplete' && id !== undefined){
        Controller.uncomplete(id)
    }
    else if(todo === 'listcomplete'){
        Controller.listCompleted()
    }
    else if(todo === 'listcomplete:asc'){
        Controller.listCompletedAsc()
    }
    else if(todo === 'listcomplete:desc'){
        Controller.listCompletedDesc()
    }
    else if(todo === 'tag'){
        Controller.tag(id, theTag)
    }
    else if(todo === 'filter'){
        Controller.filter(filt)
    }
    else {
        Controller.help()	
    }

