// const argv = process.argv;
// ARGV ONLY RETURNS STRING!

const View = require('../view/view.js');
const Model = require('../model/model.js');

let model = new Model();

class Controller {
  static getDisplay(argv) {
    if (argv[2] === undefined || argv[2] === 'help') {
      let displayText = View.displayHelp();
      return displayText;
    }
    else if (argv[2] === 'list') {
      let lists = this.getList(); // return [{id, task}]
      let displayText = View.displayList(lists);
      return displayText;
    }
    else if (argv[2] === 'add') {
      let task = argv[3];
      this.addList(task);
      View.displayAddedTask(task);
    }
    else if (argv[2] === 'findById') {
      let id = Number(argv[3]);
      let foundId = this.getId(id); // object
      View.displayList(foundId);
    }
    else if (argv[2] === 'delete') {
      let lists = this.getList();
      let id = Number(argv[3]);
      View.displayDeletedTask(id, lists);
      this.deleteById(id, lists);
    }
    else if (argv[2] === 'complete') {
      let completeId = argv[3];
      let displayText = View.displayList(completeId);
    }
    else if (argv[2] === 'uncomplete') {
      let uncompleteId = argv[3];
      let displayText = View.displayList(uncompleteId);
    }
    // console.log(displayText)
  }

  static getList() {
    // get method from model
    let todo = model.readData();
    return todo;
  }

  static addList(task) {
    model.addList(task);
  }

  static getId(id) {
    let foundObj = model.findById(id);
    return foundObj
  }

  static deleteById(id, lists) {
    console.log('from controller', model.deleteById(id, lists))
    model.deleteById(id, lists);
  }
}

module.exports = Controller