// const argv = process.argv;
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
      let displayText = View.displayAddList(task);
    }
    else if (argv[2] === 'findById') {
      let findId = argv[3];
      let displayText = View.displayById(findId);
    }
    else if (argv[2] === 'delete') {
      let deleteId = argv[3];
      let displayText = View.displayDeleteList(deleteId);
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
    let todo = model.listData();
    return todo;
  }
}

module.exports = Controller