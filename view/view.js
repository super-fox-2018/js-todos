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

  static displayList(lists) {
    for (let i = 0; i < lists.length; i++) {
      let list = lists[i];
      console.log(`${list.id}. ${list.task}`);
    }
  }

  static displayAddList(task) {
    
  }
}

module.exports = View;