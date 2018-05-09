const todo = require('./todo.js');
const model = require('./model.js');
const view = require('./view.js')
class Controller {
  constructor() {
    this.name = 'nama'
  }
  help(){
    view.listOfhelp();
  }
  list(){
    var modelList = model.read();
    // console.log(modelList);
    view.list(modelList);
    // return modelList;
  }
  add(content){
    var added = model.add(content);
    view.add(added);
  }
  findById(id){
    var find = model.find(id);
    view.find(find);
  }
  delete(id){
    var del = model.delete(id);
    view.delete(del);
  }
  Complete(id){
    var complete = model.completed(id);
    view.Complete(complete);
  }
  uncomplete(id){
    var uncomplete = model.uncomplete(id);
    view.uncompleted(uncomplete);
  }
  outstandingList(list){
    var outstandList = model.outstandingList(list);
    view.outstandingList(outstandList);
  }
  completedList(list){
    var compList = model.completedList(list);
    view.completedList(compList);
  }
  createdList(list){
    var created = model.createdList(list);
    view.createdList(created);
  }

}

var controller = new Controller;
// controller.list();
module.exports = controller;
