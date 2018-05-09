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

  static processInput(input) {
    if (input[2]) {
      const option = input[2].split(':');
      const argumentList = [];
      for (let i = 3; i < input.length; i += 1) {
        argumentList.push(input[i]);
      }
      this.route(option[0], option[1], argumentList);
    } else {
      this.handleHelp();
    }
  }

  static route(option, modifier, argumentList) {
    switch(option) {
      case 'add':
        this.handleAdd(argumentList[0]);
        break;
      case 'list':
        this.handleList(modifier, argumentList[0]);
        break;
      case 'findById':
        this.handleFindById(+argumentList[0]);
        break;
      case 'delete':
        this.handleDelete(+argumentList[0]);
        break;
      case 'complete':
        this.handleCompleteTodo(+argumentList[0]);
        break;
      case 'uncomplete' :
        this.handleUncompleteTodo(+argumentList[0]);
        break;
      case 'tag':
        break;
      default:
      this.handleHelp();
    }
  }

  static quickSort(arr, fn) {
    if (arr.length <= 1) return arr;
    const left = [];
    const right = [];
    const pivot = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i += 1) {
      if (fn(arr[i], pivot)) left.push(arr[i]);
      else right.push(arr[i]);
    }
  
    return this.quickSort(left, fn).concat(pivot, this.quickSort(right, fn));
  }

  static handleAdd(argument) {
    const newTodo = {
      task: argument,
      status: false,
      createdAt: new Date(),
      completedAt: null,
      tag: []
    };

    const addedTodo = todoList.add(newTodo);
    const message = `Added "${addedTodo.task}" to your TODO list...`;
    View.showMessage(message);
  }

  static handleHelp() {
    View.showHelp(this.options);
  }

  static handleList(modifier, order) {
    const opt = modifier === 'completed' ? { status : true } : null;
    let todos = todoList.find(opt);
    if (modifier) {
      const mod = modifier === 'created' ? 'createdAt' : 'completedAt';
      const fn = (a,b) => {
        if (order === 'asc') return a[mod] < b[mod];
        else return a[mod] > b[mod];
      }
      todos = this.quickSort(todos, fn);
    }
    View.showList(todos);
  }

  static handleFindById(id) {
    const todo = todoList.findById(id);
    if (todo) {
      View.showOne(todo);
    } else {
      View.showMessage('Todo not found');
    }
  }

  static handleDelete(id) {
    const deletedTodo = todoList.deleteById(id);
    if (deletedTodo) {
      View.showMessage(`Deleted "${deletedTodo.task}" from your TODO list...`);
      View.showOne(deletedTodo);
    } else {
      View.showMessage("Todo not found");
    }
  }

  static handleCompleteTodo(id) {
    const updatedTodo = todoList.updateById(id, { status : true, completedAt : Date.now() });
    if (updatedTodo) {
      // this.handleList();
    } else {
      View.showMessage("Todo not found");
    }
  }

  static handleUncompleteTodo(argument) {
    const id = +argument;
    const updatedTodo = todoList.updateById(id, { status : false, completedAt : null });
    if (updatedTodo) {
      // this.handleList();
    } else {
      View.showMessage("Todo not found");
    }
  }
}

module.exports = Controller;