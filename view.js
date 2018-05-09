

class View{
   
    constructor(){

    }

    helpList(){
        let help = ['COMMAND YANG TERSEDIA\n==========================',
        'node todo.js help',
        'node todo.js list',
        'node todo.js add <task_content>',
        'node todo.js findById <task_id>',
        'node todo.js delete <task_id>',
        'node todo.js complete <task_id>',
        'node todo.js uncomplete <task_id>',
        'node todo.js list:created asc|desc']

        for(let i =0;i <help.length;i++){
            console.log(help[i])
        }
    }
    add(addTask){
        console.log(`Add ${addTask.taskName} to your todo list`)

    }

    delete(deleted){
        console.log(`Delete "${deleted.taskName}" from your todo list`);
      }

    listTask(list){
        let dataTask = list
        // console.log(dataTask)
        for(let i=0;i<dataTask.length;i++){
            console.log(`id : ${dataTask[i].id} [${dataTask[i].status}] task: ${dataTask[i].taskName}`)
        }
    }

    completedList(completed){
        for (var i = 0; i < completed.length; i++) {
          console.log(completed[i]);
        }
    }

    findById(byId){
        console.log(`${byId.taskName}`)
    }
     
     
}
var view = new View

module.exports = view