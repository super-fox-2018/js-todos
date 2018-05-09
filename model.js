"use strict"
const fs = require('fs')
class Model {
    static readFile(){
        let fileRead = JSON.parse(fs.readFileSync('data.json','utf-8'))      
        return fileRead
    }

    static sortList(todoFile,sortBy,ascDesc){
        if(sortBy!==undefined){
            if(sortBy === "created"){
                if(ascDesc === 'asc'){
                    for(let i = 1; i < todoFile.length; i++){
                        if(todoFile[i-1].createdAt > todoFile[i].createdAt){
                            let temp = todoFile[i-1]
                            todoFile[i-1] = todoFile[i]
                            todoFile[i] = temp
                            i = 0
                        }
                    }
                }else if(ascDesc === 'desc'){
                    for(let i = 1; i < todoFile.length; i++){
                        if(todoFile[i-1].createdAt < todoFile[i].createdAt){
                            let temp = todoFile[i-1]
                            todoFile[i-1] = todoFile[i]
                            todoFile[i] = temp
                            i = 0
                        }
                    }
                }
            }else if(sortBy === "completed"){
                for(let i = 0; i < todoFile.length; i++){
                    if(todoFile[i].status!=='completed'){
                        todoFile.splice(i,1)
                    }
                }
                if(ascDesc === 'asc'){
                    for(let i = 1; i < todoFile.length; i++){
                        if(todoFile[i-1].completedIn > todoFile[i].completedIn){
                            let temp = todoFile[i-1]
                            todoFile[i-1] = todoFile[i]
                            todoFile[i] = temp
                            i = 0
                        }
                    }
                }else if(ascDesc === 'desc'){
                    for(let i = 1; i < todoFile.length; i++){
                        if(todoFile[i-1].completedIn < todoFile[i].completedIn){
                            let temp = todoFile[i-1]
                            todoFile[i-1] = todoFile[i]
                            todoFile[i] = temp
                            i = 0
                        }
                    }
                }
            }
        }  
        return todoFile
    }
    
    static WriteData(todoFile,callback){
        todoFile = JSON.stringify(todoFile,null,2)
        fs.writefileSync('data.json',todoFile,'utf-8')
        if(callback !== undefined) callback(this.readfile())
    }

    static addTask(task,todoFile){
        let lastId = todoFile.length<1? 0 : todoFile[todoFile.length-1].id
        todoFile.push({id: lastId+1, content: task, status: 'uncompleted', createdAt: new Date(),completedIn: null,tags:[]})
        return todoFile
    }

    static findById(id,todoFile){
        for(let i = 0; i < todoFile.length; i++){
            if(+todoFile[i].id === +id){
                return i
            }
        }
        return -1
    }

    static deleteById(id,index,todoFile){
        if(index>=0) todoFile.splice(index,1)
        return todoFile
    }

    static completeById(id,index){
        let todoFile = this.readFile()
        let fileCompleted = todoFile[index]
        if(index>=0) {
        todoFile[index].status = 'completed'
        todoFile[index].completedIn = new Date()
        }
        return todoFile
    }

    static uncompleteById(id,index,todoFile){
        if(index>=0){
            todoFile[index].status = 'uncompleted'
            todoFile[index].completedIn = null
        }
        return todoFile
    }

    static addTag(todoFile,index,tags){
        let TagAdded = []
        if(todoFile[index] === undefined) return false
        for(let i = 0; i < tags.length; i++){
            if(todoFile[index].tags.indexOf(tags[i])<0) {
                todoFile[index].tags.push(tags[i])
                TagAdded.push(tags[i])
            }
        }
        return [todoFile,TagAdded]
    }

    static unTag(todoFile,index,tags){
        let TagRemoved = []
        if(todoFile[index] === undefined) return false
        for(let i = 0; i < tags.length; i++){
            let checkIdx = todoFile[index].tags.indexOf(tags[i])
            if(checkIdx>0) {
                todoFile[index].tags.splice(checkIdx,1)
                TagRemoved.push(tags[i])
            }
        }
        return [todoFile,TagRemoved]
    }

    static filterTag(todoFile,filter){
        let fileReturned = []
        for(let i = 0; i < filter.length; i++){
            for(let j = 0; j < todoFile.length; j++){
                let checkIdxtags = todoFile[j].tags.indexOf(filter[i])
                let checkIdxList = fileReturned.indexOf(todoFile[j])
                if(checkIdxtags >=0 && checkIdxList<0) fileReturned.push(todoFile[j])
            }
        }
        return fileReturned
    }

}
module.exports = Model

