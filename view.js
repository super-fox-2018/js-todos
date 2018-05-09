const controller = require('./controller.js');

class View {
  constructor() {
    this.help = [
      "node todo.js list",
      "node todo.js add <task_content>",
      "node todo.js findById <task_id>",
      "node todo.js delete <task_id>",
      "node todo.js complete <task_id>",
      "node todo.js uncomplete <task_id>"
    ]
  }
  listOfhelp(){
    var listHelp = this.help;
      for (var i = 0; i < listHelp.length; i++) {
        console.log(listHelp[i]);
      }
  }
  list(inputList){
    // var id = 1;
    for (var i = 0; i < inputList.length; i++) {
      // inputList[i].id = id;
      console.log(`${inputList[i].id} : ${inputList[i].task}`);
      // id++;
    }
  }
  add(added){
    console.log(`Added "${added.task}" to your TODO list...`);
  }

  find(content){
    console.log(`${content.id}. ${content.task}`);
  }
  delete(deleted){
    console.log(`Deleted "${deleted.task}" to your TODO list...`);
  }
  Complete(complete){
    for (var i = 0; i < complete.length; i++) {
      console.log(`${complete[i].id}. ${complete[i].status} ${complete[i].task}`);
    }
  }
  uncompleted(uncomplete){
    for (var i = 0; i < uncomplete.length; i++) {
      console.log(`${uncomplete[i].id}. ${uncomplete[i].status} ${uncomplete[i].task}`);
    }
  }
  outstandingList(outstand){
    // for (var i = 0; i < outstand.length; i++) {
    //   console.log(outstand[i]);
    // }
    console.log(outstand);
  }
  completedList(completed){
    for (var i = 0; i < completed.length; i++) {
      console.log(completed[i]);
    }
  }
  createdList(created){
    console.log(created);
  }
}

var view = new View;
// view.list();
module.exports = view;
