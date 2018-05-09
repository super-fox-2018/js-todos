const View = require('../views/mainView');
const Todo = require('../models/Todo');

const options = [
  { name: 'add', purpose: 'Add a new TODO to the list followed by task_content'},
  { name: 'list', purpose: 'Show all TODO in the list'},
  { name: 'findById', purpose: 'Show details of specific TODO based on the task_id'},
  { name: 'delete', purpose: 'Delete a TODO based on the task_id'},
  { name: 'complete', purpose: 'Mark a TODO as complete based on the task_id'},
  { name: 'uncomplete', purpose: 'Mark a TODO as uncomplete based on the task_id'},
  { name: 'help', purpose: 'Show all commands for this program'},
];

const todoList = new Todo('data.json');

class Controller {
  static get options() {
    return options;
  }

  static route(option, argument) {
    switch(option) {
      case 'add':
        this.addHandler(argument);
        break;
      case 'list':
        this.listHandler();
        break;
      case 'findById':
        this.findByIdHandler(argument);
        break;
      case 'delete':
        this.deleteHandler(argument);
        break;
      case 'complete':
        this.completeHandler(argument);
        break;
      case 'uncomplete' :
        this.uncompleteHandler(argument);
        break;
      default:
      this.helpHandler(argument);
    }
  }

  static addHandler(argument) {
    const newTodo = {
      task: argument,
      status: false,
      createdAt: new Date()
    };

    const addedTodo = todoList.add(newTodo);
    const message = `Added "${addedTodo.task}" to your TODO list...`;
    View.showMessage(message);
  }

  static helpHandler(argument) {
    View.showHelp(this.options);
  }

  static listHandler() {
    const todos = todoList.find();
    View.showList(todos);
  }

  static findByIdHandler(argument) {
    const id = +argument;
    const todo = todoList.findById(id);
    if (todo) {
      View.showOne(todo);
    } else {
      View.showMessage('Todo not found');
    }
  }

  static deleteHandler(argument) {
    const id = +argument;
    const deletedTodo = todoList.delete(id);
    if (deletedTodo) {
      View.showMessage(`Deleted "${deletedTodo.task}" from your TODO list...`);
      View.showOne(deletedTodo);
    } else {
      View.showMessage("Todo not found");
    }
  }

  static completeHandler(argument) {
    const id = +argument;
    const updatedTodo = todoList.updateById(id, { status : true });
    if (updatedTodo) {
      this.listHandler();
    } else {
      View.showMessage("Todo not found");
    }
  }

  static uncompleteHandler(argument) {
    const id = +argument;
    const updatedTodo = todoList.updateById(id, { status : false });
    if (updatedTodo) {
      this.listHandler();
    } else {
      View.showMessage("Todo not found");
    }
  }
}

module.exports = Controller;