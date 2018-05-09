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
      // let lists = this.getList();
      let completeId = argv[3];
      let completeList = this.completeList(completeId);
      //console.log(completeList)
      View.displayList(completeList);
    }
    else if (argv[2] === 'uncomplete') {
      // let lists = this.getList();
      let uncompleteId = argv[3];
      let uncompleteList = this.uncompleteList(uncompleteId);
      //console.log(uncompleteList)
      View.displayList(uncompleteList);
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
    model.deleteById(id, lists);
  }

  static completeList(id) {
    let completeObj = model.completeList(id);
    return completeObj;
  }

  static uncompleteList(id) {
    let uncompleteObj =  model.uncompleteList(id);
    return uncompleteObj;
  }
}

module.exports = Controller