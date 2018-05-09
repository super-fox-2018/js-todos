"use strict"
const Model = require('./model.js')
const View = require('./view.js')




class Controller {
    static getList(sortBy,ascDesc){
        let fileUsed = Model.readFile()
        ascDesc = ascDesc === undefined? '' : ascDesc.toLocaleLowerCase()
        fileUsed = Model.sortList(fileUsed,sortBy,ascDesc)
        View.getList(fileUsed)
    }
    static addTask(task){
        let fileUsed = Model.readFile()
        fileUsed = Model.addTask(task,fileUsed)
        Model.WriteData(fileUsed)
        View.addTask(task)
    }
    static findById(id){
        let fileUsed = Model.readFile()
        let checkIndex = Model.findById(id,fileUsed)
        let dataFound = fileUsed[checkIndex]
        View.findById(dataFound)
    }
    static deleteTask(id){
        let fileUsed = Model.readFile()
        let checkIndex = Model.findById(id,fileUsed)
        View.deleteById(fileUsed[checkIndex])
        let deletedFile = Model.deleteById(id,checkIndex,fileUsed)
        Model.WriteData(deletedFile)
    }
    static completeTask(id){
        let fileUsed = Model.readFile()
        let checkIndex = Model.findById(id,fileUsed)
        let completedFile = Model.completeById(id,checkIndex,fileUsed)
        Model.WriteData(completedFile,function(data){        
            View.getList(data)
        })

    }
    static uncompleteTask(id){
        let fileUsed = Model.readFile()
        let checkIndex = Model.findById(id,fileUsed)
        let uncompletedFile = Model.uncompleteById(id,checkIndex,fileUsed)
        Model.WriteData(uncompletedFile,function(data){        
            View.getList(data)
        })
    }
    static addTag(id,tagCandidate){
        let fileUsed = Model.readFile()
        let checkIndex = Model.findById(id,fileUsed)
        let addTag = Model.addTag(fileUsed,checkIndex,tagCandidate)
        Model.WriteData(addTag[0])
        View.addTag(addTag,checkIndex)
    }
    static unTag(id,tagCandidate){
        let fileUsed = Model.readFile()
        let checkIndex = Model.findById(id,fileUsed)
        let unTag = Model.unTag(fileUsed,checkIndex,tagCandidate)
        Model.WriteData(unTag[0])
        View.unTag(unTag,checkIndex)
    }
    static filter(filter){
        filter = filter.split(',')
        let fileUsed = Model.readFile()
        let filteredfile = Model.filterTag(fileUsed,filter)
        View.filteredList(filteredfile,filter)

    }
}

module.exports = Controller