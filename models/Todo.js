const fs = require('fs');

class Todo {

  static readData() {
    const string = fs.readFileSync('data.json', 'utf8');
    return string !== '' ? JSON.parse(string) : [];
  }

  static writeData(data) {
    const string = JSON.stringify(data, null, 2);
    fs.writeFileSync('data.json', string);
  }

  static add(newTodo) {
    const todos = this.readData();
    const todosLength = todos.length;
    newTodo.id = todosLength === 0 ? 1 : todos[todosLength - 1].id + 1;
    todos.push(newTodo);
    this.writeData(todos);
    return newTodo;
  }

  static deleteById(id) {
    const todos = this.readData();
    let deletedTodo = null;
    for (let i = 0; i < todos.length; i += 1) {
      const todo = todos[i];
      if (todo.id === id) {
        deletedTodo = todos.splice(i, 1)[0];
        this.writeData(todos);
        break;
      }
    }
    return deletedTodo;
  }

  static find(opt) {
    const todos = this.readData();
    if (opt) {
      const newTodos = [];
      const keys = Object.keys(opt);
      for (let i = 0; i < todos.length; i += 1) {
        const todo = todos[i];
        let result = false;
        for (let j = 0; j < keys.length; j += 1) {
          const prop = keys[j];
          if (todo[prop] === opt[prop]) result = true;
          else {
            result = false;
            break;
          }
        }
        if (result) newTodos.push(todo);
      }
      return newTodos;
    } else {
      return todos;
    }
  }

  static findById(id) {
    const todos = this.readData();
    for (let i = 0; i < todos.length; i += 1) {
      const todo = todos[i];
      if (todo.id === id) {
        return todo;
      }
    }
    return null;
  }

  static updateById(id, options={}) {
    const todos = this.readData();
    const keys = Object.keys(options);
    for (let i = 0; i < todos.length; i += 1 ) {
      const todo = todos[i];
      if (todo.id === id) {
        for (let j = 0; j < keys.length; j += 1) {
          const prop = keys[j];
          todo[prop] = options[prop]
        }
        this.writeData(todos);
        return todo;
      }
    }
    return null;
  }
}

module.exports = Todo;