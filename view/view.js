//const argv = process.argv;

class View {
  static displayHelp() {
    console.log(`usage:
    $ node todo.js help
    $ node todo.js list
    $ node todo.js add <task_content>
    $ node todo.js findById <task_id>
    $ node todo.js delete <task_id>
    $ node todo.js complete <task_id>
    $ node todo.js uncomplete <task_id>`); 
  }

  static displayList(data) {
    if (data.length >= 0) {
      console.log(`TODO List:`)
      for (let i = 0; i < data.length; i++) {
        let list = data[i];
        console.log(`${list.id}. ${list.task}`);
      }
    } else {
      console.log(`${data.id}. ${data.task}`);
    }
  }

  static displayAddedTask(task) {
    console.log(`Added "${task}" to your TODO list...`)
  }

  static displayDeletedTask(id, lists) {
    for (let i = 0; i < lists.length; i++) {
      let list = lists[i];
      if (id == list['id']) {
        console.log(`Deleted "${list['task']}" from your TODO list...`)
        break;
      }
    }
  }

}

module.exports = View;