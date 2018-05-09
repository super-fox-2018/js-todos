
const View = require('./view.js')
const model = require('./model.js')
class Controller{

    constructor(){

    }
    getListTask(){
        var arrData = model.readList()
      
        View.listTask(arrData)
    }

    addListTask(taskName){
        var add = model.addList(taskName)
        View.add(add)
        
    }

    delListTask(delName){
        var del = model.deleteList(delName)
        View.delete(del)
    }

    completeTask(complete){
        var compl = model.complete(complete)
    }

    unCompleteTask(not){
        var un = model.unComplete(not)
    }

    listCompleteTask(comp){
        var listC = model.listComplete(comp)
        View.completedList(listC)
    }

    idFind(id){
        var find = model.findId(id)
        View.findById(find)
    }

}
var control = new Controller
module.exports = control