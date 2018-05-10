
'use strict'

const View = require('./view');
const Model = require('./model');
// var command = process.argv.splice(2,1)
class Controller {
  constructor() {

  }

  static help(command){
    if(command == 0 || command[0] == 'help'){
      View.viewHelp(command)
    } else if(command[0] == 'list'){
      Model.readData(function(data){
      View.viewList(data)
      })
    } else if(command[0] == 'add'){
      Model.readData(function(data){
        let objAdd = {
          id      : 1,
          detail  : command[1],
          status  : 'incomplete',
        }

        if(data.length > 0){
          objAdd.id = 1 + data[data.length-1].id
        }
        data.push(objAdd)
        Model.saveData(data)
        View.viewAdd(data)
      })
    } else if(command[0] == 'task'){
      Model.readData(function(data){
      for (var i = 0; i < data.length; i++) {
        if(data[i].id == command[1]){
          View.viewTask(data,i)
        }
      }
      })
    } else if(command[0] == 'delete'){
      Model.readData(function(data){
      for (var i = 0; i < data.length; i++) {
        if(data[i].id == command[1]){
          data.splice([i],1)
          View.viewDelete(data)
        }
      }
      Model.saveData(data)
      })
    }


  }
}

module.exports = Controller;
