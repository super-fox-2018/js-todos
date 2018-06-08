const View = require('../views/mainView');
const Todo = require('../models/Todo');
const quickSort = require('../helpers/sort');

class Controller {
  static handleAdd(argument) {
    const newTodo = {
      task: argument,
      status: false,
      createdAt: Date.now(),
      completedAt: null,
      tags: []
    };

    const addedTodo = Todo.add(newTodo);
    const message = `Added "${addedTodo.task}" to your TODO list...`;
    View.showMessage(message);
  }

  static handleHelp() {
    const options = [
      { name: 'add', purpose: 'Add a new TODO to the list followed by task_content'},
      { name: 'list', purpose: 'Show all TODO in the list'},
      { name: 'findById', purpose: 'Show details of specific TODO based on the task_id'},
      { name: 'delete', purpose: 'Delete a TODO based on the task_id'},
      { name: 'complete', purpose: 'Mark a TODO as complete based on the task_id'},
      { name: 'uncomplete', purpose: 'Mark a TODO as uncomplete based on the task_id'},
      { name: 'help', purpose: 'Show all commands for this program'},
      { name: 'tag', purpose: 'Give tags to a TODO based on the task_id'},
      { name: 'untag', purpose: 'Remove tags from a TODO based on the task_id'},
      { name: 'filter', purpose: 'Filter TODOs based on the tags that they have'}
    ];
    View.showHelp(options);
  }

  static handleList(modifier, order) {
    const opt = modifier === 'completed' ? { status : true } : null;
    let todos = Todo.find(opt);
    if (modifier) {
      const mod = modifier === 'created' ? 'createdAt' : 'completedAt';
      const fn = (a,b) => {
        if (order === 'desc') return a[mod] > b[mod];
        else return a[mod] < b[mod];
      }
      todos = quickSort(todos, fn);
    }
    View.showList(todos);
  }

  static handleFindById(id) {
    const todo = Todo.findById(id);
    if (todo) {
      View.showOne(todo);
    } else {
      View.showMessage('Todo not found');
    }
  }

  static handleDelete(id) {
    const deletedTodo = Todo.deleteById(id);
    if (deletedTodo) {
      View.showMessage(`Deleted "${deletedTodo.task}" from your TODO list...`);
      View.showOne(deletedTodo);
    } else {
      View.showMessage("Todo not found");
    }
  }

  static handleCompleteTodo(id) {
    const updatedTodo = Todo.updateById(id, { status : true, completedAt : Date.now() });
    if (updatedTodo) {
      const todos = Todo.find();
      View.showList(todos);
    } else {
      View.showMessage("Todo not found");
    }
  }

  static handleUncompleteTodo(argument) {
    const id = +argument;
    const updatedTodo = Todo.updateById(id, { status : false, completedAt : null });
    if (updatedTodo) {
      const todos = Todo.find();
      View.showList(todos);
    } else {
      View.showMessage("Todo not found");
    }
  }

  static handleTag(id, tags) {
    const todo = Todo.findById(id);
    for (let i = 0; i < tags.length; i += 1) {
      const tag = tags[i];
      if (!todo['tags'].includes(tag)) todo['tags'].push(tag);
    }
    const updatedTodo = Todo.updateById(id, { tags : todo.tags });
    const message = `Tagged task "${updatedTodo.task}" with tags ${updatedTodo.tags.join(', ')}`;
    View.showMessage(message);
  }

  static handleUntag(id, tags) {
    const todo = Todo.findById(id);
    for (let i = 0; i < tags.length; i += 1) {
      const tag = tags[i];
      const idx = todo['tags'].indexOf(tag);
      if (idx > -1) todo['tags'].splice(idx, 1);
    }

    const updatedTodo = Todo.updateById(id, { tags : todo.tags });
    const message = `Tagged task "${updatedTodo.task}" with tags : ${updatedTodo['tags'].join(', ')}`;
    View.showMessage(message);
  }

  static handleFilter(modifier) {
    const todos = Todo.find();
    const newTodos = [];
    for (let i = 0; i < todos.length; i += 1) {
      const todo = todos[i];
      if (todo['tags'].includes(modifier)) newTodos.push(todo);
    }
    View.showFilteredTodo(newTodos);
  }
}

module.exports = Controller;