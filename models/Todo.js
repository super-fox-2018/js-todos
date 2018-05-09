const fs = require('fs');

class Todo {
  constructor(filename) {
    this._filename = filename;
    this._todos = this.readData();
  }

  readData() {
    const string = fs.readFileSync(this._filename, 'utf8');
    return string !== '' ? JSON.parse(string) : [];
  }

  writeData() {
    const string = JSON.stringify(this._todos, null, 2);
    fs.writeFile(this._filename, string, (err) => {
      if (err) throw err;
    });
  }

  add(newTodo) {
    const todosLength = this._todos.length;
    newTodo.id = todosLength === 0 ? 1 : this._todos[todosLength - 1].id + 1;
    this._todos.push(newTodo);
    this.writeData();
    return newTodo;
  }

  delete(id) {
    let deletedTodo = null;
    for (let i = 0; i < this._todos.length; i += 1) {
      const todo = this._todos[i];
      if (todo.id === id) {
        deletedTodo = this._todos.splice(i, 1)[0];
        this.writeData();
        break;
      }
    }
    return deletedTodo;
  }

  find() {
    return this._todos;
  }

  findById(id) {
    for (let i = 0; i < this._todos.length; i += 1) {
      const todo = this._todos[i];
      if (todo.id === id) {
        return todo;
      }
    }

    return null;
  }

  updateById(id, options={}) {
    const keys = Object.keys(options);
    for (let i = 0; i < this._todos.length; i += 1 ) {
      const todo = this._todos[i];
      if (todo.id === id) {
        for (let j = 0; j < keys.length; j += 1) {
          const prop = keys[j];
          todo[prop] = options[prop]
        }
        this.writeData();
        return todo;
      }
    }
    return null;
  }


}

module.exports = Todo;