const Model = require('./model');
const View = require('./view');

let model = new Model('data.json');
let view = new View();

class Controller {
  help() {
    let commandList = model.commandList;
    view.displayCommands(commandList);
  }

  list(status = 'created', sort = 'asc') {
    let taskList = model.taskList;
    if (status === 'completed') {
      taskList = model.completedTaskList();
      taskList = this.sort(taskList, 'completedAt', sort);
    } else if (status === 'created') {
      taskList = this.sort(taskList, 'createdAt', sort);
    }
    view.displayTaskList(taskList);
  }

  add(taskName) {
    model.add(taskName);
    model.write();
  }

  findById(id) {
    let task = model.find(id);
    view.displayTask(task);
  }

  delete(id) {
    model.delete(id);
    model.write();
  }

  complete(id) {
    model.complete(id);
    model.write();
  }

  uncomplete(id) {
    model.uncomplete(id);
    model.write();
  }

  addTags(id, tags) {
    model.addTags(id, tags);
    model.write();
  }

  filterByTag(tag) {
    let taskList = model.filterByTag(tag);
    let sortedTaskList = this.sort(taskList, 'createdAt', 'asc');
    view.displayTaskList(taskList);
  }

  sort(list, sortBy, mode) {
    let taskList = list;
    taskList.sort(function(a, b) {
        let dateA = Date.parse(a[sortBy]);
        let dateB = Date.parse(b[sortBy]);
        if (dateA > dateB) {
          return mode === 'asc';
        } else if (dateA < dateB) {
          return mode === 'desc';
        }
      });
    return taskList;
  }
}

module.exports = Controller;
