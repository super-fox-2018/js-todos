const TodoController = require('./todoController')

const argv1 = process.argv[2];
const argv2 = process.argv[3];
const argv3 = process.argv[4];

if (argv1 === 'help' || !argv1) {
    TodoController.getHelp()
} else if (argv1.split(':')[0] === 'list' || argv1.split(':')[0] === 'filter') {
    TodoController.getList(argv1, argv2)
} else if (argv1 === 'add') {
    if (argv2) {
        TodoController.add(argv2)
    } else {
        console.log(`the command should be: add <task_content> `)
    }
} else if (argv1 === 'findById') {
    if (argv2) {
        TodoController.findById(argv2)
    } else {
        console.log('the command should be: findById <task_id>')
    }
} else if (argv1 === 'delete') {
    if (argv2) {
        TodoController.delete(argv2)
    } else {
        console.log('the command should be: findById delete <task_id>')
    }
} else if (argv1 === 'complete' || argv1 === 'uncomplete') {
    TodoController.setStatus(argv1, argv2)
} else if (argv1 === 'tag') {
    if (argv3) {
        TodoController.addTag(process.argv)
    }
}
else {
    console.log('command salah!')
}



