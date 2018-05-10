'use strict'

class View {
  constructor() {

  }
  static viewHelp(command){
    console.log(
      ` $ node todo.js
      $ node todo.js help
      $ node todo.js list
      $ node todo.js add <task_content>
      $ node todo.js task <task_id>
      $ node todo.js delete <task_id>
      $ node todo.js complete <task_id>
      $ node todo.js uncomplete <task_id`);
    }

  static viewList(data){
    let arrToDo = []
    let list = ''
    for (var i = 0; i < data.length; i++) {
      arrToDo.push(`${data[i].id}. ${data[i].detail}`);
    }
    list = arrToDo.join('\n')
    console.log(list);
  }

  static viewAdd(data){
    console.log(`Added "${data[data.length-1].detail}" to your TODO list...`);
  }

  static viewTask(data,urutan){
    console.log(`${data[urutan].id}. ${data[urutan].detail}`);
  }

  static viewDelete(data){
    console.log(`Deleted "${data[data.length-1].detail}" from your TODO list...`);
  }
}


module.exports = View;
