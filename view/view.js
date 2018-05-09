//const argv = process.argv;

class View {
  static display(argv) {
    if (argv[2] === undefined || argv[2] === 'help') {
      console.log(`usage:
      $ node todo.js help
      $ node todo.js list
      $ node todo.js add <task_content>
      $ node todo.js findById <task_id>
      $ node todo.js delete <task_id>
      $ node todo.js complete <task_id>
      $ node todo.js uncomplete <task_id>`);
    }
    else if (argv[2] === 'list') {
      
    }
  }
}

module.exports = View;