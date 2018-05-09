const fs = require('fs');

class Model {
  constructor(fileName) {
    this.fileName = fileName;
    this.taskList = this.read(fileName);
    this.commandList = this.read('commands.json');
  }

  read(fileName) {
    let fileStr = fs.readFileSync(fileName, 'utf8');
    let arrayOfObj = JSON.parse(fileStr);
    return arrayOfObj;
  }

  write() {
    let taskList = this.taskList;
    let content = JSON.stringify(taskList, null, 2);
    fs.writeFileSync(this.fileName, content);
  }

  add(taskName) {
    let lastTask = this.taskList[this.taskList.length - 1];
    let newId = lastTask.id + 1;
    let status = 'pending';
    let createDate = new Date();
    let newTask = {
      id: newId,
      task: taskName,
      status: status,
      createdAt: createDate,
    };
    this.taskList.push(newTask);
  }

  find(id) {
    let task = this.getTask(id);
    return task;
  }

  delete(id) {
    let deleted = false;
    for (let i = 0; i < this.taskList.length; i++) {
      let task = this.taskList[i];
      if (task.id === id) {
        this.taskList.splice(i, 1);
        deleted = true;
        i--;
      }
      if (deleted) {
        task.id--;
      }
    }
  }

  complete(id) {
    let task = this.getTask(id);
    task.status = 'completed';
    task.completedAt = new Date();
  }

  uncomplete(id) {
    let task = this.getTask(id);
    task.status = 'pending';
    task.completedAt = '0';
  }

  completedTaskList() {
    let completedTaskList = [];
    for (let i = 0; i < this.taskList.length; i++) {
      let task = this.taskList[i];
      if (task.status === 'completed') {
        completedTaskList.push(task);
      }
    }
    return completedTaskList;
  }

  addTags(id, tags) {
    let task = this.getTask(id);
    let newTags = tags;
    for (let i = 0; i < newTags.length; i++) {
      task.tags.push(newTags[i]);
    }
  }

  filterByTag(tag) {
    let filteredList = [];
    for (let i = 0; i < this.taskList.length; i++) {
      let task = this.taskList[i];
      for (let j = 0; j < task.tags.length; j++) {
        if (task.tags[j] === tag) {
          filteredList.push(task);
        }
      }
    }
    return filteredList;
  }

  getTask(id) {
    for (let i = 0; i < this.taskList.length; i++) {
      let task = this.taskList[i];
      if (task.id === Number(id)) {
        return this.taskList[i];
      }
    }
    return false;
  }
}

module.exports = Model;
