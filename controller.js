const model = require("./model");
const view = require ("./view")

class Controller{
  constructor(filename){
    this._filename = filename;
  }

  help(){
    view.displayHelp();
  }

  list(){
    let todoList = model.Read();
    view.displayList(todoList);
  }

  add(task){
    model.addTask(task);
    view.addDisplay(task);
  }

  delete(id){
    let task =  model.find(id);
    view.deleteDisplay(task);
    model.deleteTask(id);

  }

  find(id){
    let task = model.find(id)
    view.displayTask(id,task);
  }

  complete(id){
    model.complete(id);
    this.list();
  }

  uncomplete(id){
    model.uncomplete(id);
    this.list();
  }

  sortCreated(sortOrder){
    if(sortOrder === "asc"){
      model.sortCreatedAsc();
      let todoList = model.Read();
      view.displayList(todoList);
    }
    else if(sortOrder === "desc"){
      model.sortCreatedDesc();
      let todoList = model.Read();
      view.displayList(todoList);
    }
  }

  sortOutstanding(sortOrder){
    if(sortOrder === "asc"){
      let outstanding = model.readOutstanding();
      model.sortOutstandingAsc(outstanding);
      view.displayList(outstanding);
    }
    else if(sortOrder === "desc"){
      let outstanding = model.readOutstanding();
      model.sortOutstandingDesc(outstanding);
      view.displayList(outstanding);
    }
    else if (sortOrder === undefined){
      let outstanding = model.readOutstanding();
      view.displayList(outstanding)
    }
  }

  sortComplete(sortOrder){
    if(sortOrder === "asc"){
      let complete = model.readComplete();
      model.sortCompletedAsc(complete);
      view.displayList(complete);
    }
    else if(sortOrder === "desc"){
      let complete = model.readComplete();
      model.sortCompletedDesc(complete);
      view.displayList(complete);
    }
    else if (sortOrder === undefined){
      let complete = model.readComplete();
      view.displayList(complete)
    }
  }

  tag(id, arr){
    let tag = model.tag(id, arr);
    let task  = model.find(id);
    view.displayTag(task, arr);
  }

  filter(tag){
    let data = model.filter(tag);
    view.displayFilter(data);
  }
}

let control = new Controller("data.json");
// console.log(control.sortOutstanding("asc"));
module.exports = control;