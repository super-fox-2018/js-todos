const controller = require("./controller");
const fs = require('fs');

class View{
  constructor(filename){
    this._filename = filename;
   this._data = [];
  }

  displayHelp(){
    console.log("- list");
    console.log("- add <task_content>");
    console.log("- findById <task_id>");
    console.log("- delete <task_id> ");
    console.log("- complete <task_id>");
    console.log("- uncomplete <task_id>");
    console.log("- list:created asc|desc");
    console.log("- list:completed asc|desc");
    console.log("- tag <task_id> <tag_name_1> <tag_name_2> <tag_name_3>... <tag_name_N>");
    console.log("- filter: <tag_name>");
  }

  displayList(list){
    var str = "";
    for(let i = 0; i < list.length; i++){
      if(list[i].status === "complete"){
        str = "x";
      }
      else{
        str = " ";
      }
      console.log((i+1) + ". [" + str + "] " + list[i].task);
    }
  }

  displayTask(id, task){
    console.log(id + ". " + task);
  }

  deleteDisplay(task){
    console.log("Deleted \"" + task + "\" from your TODO list...");
  }

  addDisplay(task){
    console.log("Added \"" + task + "\" to your TODO list...")
  }

  displayTag(task, tag){
    let str = ""
    let arr = [];
    for(let i = 0; i < tag.length; i++){
      if(arr.indexOf(tag[i]) === -1){
        arr.push(tag[i]);
        str += (tag[i] + " ");
      }
    }

    console.log("Tagged task \"" + task  + "\" with tags: " + str)
  }

  displayFilter(data){
    for(let i = 0; i < data.length; i++){
      console.log(data[i].id + ". " + data[i].task + " [" + data[i].tag + "]");
    }
  }

}

let view = new View("data.json");

module.exports = view;