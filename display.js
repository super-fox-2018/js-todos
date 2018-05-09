// display result

const modular = require("./module.js")

class Display {

    constructor () {

    }

    static displayUndefined () {
        console.log('Type : "node todo.js help" for all the help you need :)')
    }

    static displayHelp () {
        console.log('Type : "node todo.js help" => get you all the help you need :)')
        console.log('Type : "node todo.js list" => bring you all the task on this app')
        console.log('Type : "node todo.js add <task_content>" => add more task')
        console.log('Type : "node todo.js findById <task_id>" => search task by id #')
        console.log('Type : "node todo.js delete <task_id>" => delete task by id #') 
        console.log('Type : "node todo.js complete <task id>" => assign this task as complete')
        console.log('Type : "node todo.js uncomplete <task id>" => assign this task as not complete')
        console.log('Type : "node todo.js list:created <asc> or <desc>" => sort all the task by time created')
        console.log('Type : "node todo.js list:completed <asc> or <desc>" => sort all completed task in order by time completion')
        console.log('Type : "node todo.js tag <tag1> <tag2> <tagN>" => assign a task with one or more tags')
        console.log('Type : "node todo.js filter <tag>" => search a task by its tag')
    }

    static displayList (task) {
        console.log(task.join("\n"))
    }

    static displayAdd (str) {
        console.log(`Added ${str} to your ToDo list! :)`)
    }

    static searchId (str) {
        console.log(str)
    }

    static displayDelete (str) {
        console.log(`Deleted ${str} from your ToDo list! :(`)
    }
}

module.exports = Display
