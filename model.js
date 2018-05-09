"use strict"
const fs = require('fs')
const todo = require('./todo.js')


class Model{
    constructor(file){
        this._file = fs.readFileSync(file,'utf8')
    }

    readList(){
        let data = this._file
        return JSON.parse(data)
    }

    addList(input){
     
        let file = JSON.parse(this._file)
        let obj ={}
        obj.id = file[file.length-1].id + 1
        obj.status =''
        obj.taskName = input
        obj.date = new Date()
        file.push(obj)
        // console.log(file)
        let tampung = JSON.stringify(file,null,2)
        fs.writeFileSync('data.json',tampung)
        return obj
    }

    deleteList(del){
        let file = JSON.parse(this._file)
        let dele;
        for(let i=0;i<file.length;i++){
            if(file[i].id == del){
                file.splice(i,1)
                 dele = file[i]
            }
           
        }
        let hapus = JSON.stringify(file,null,2)
        fs.writeFileSync('data.json',hapus)
        return dele
    }

    complete(complete){
        let file = JSON.parse(this._file)
        for(let i=0;i<file.length;i++){
            if(file[i].id == complete){
                file[i].status ='x'
            }
        }
        let comp = JSON.stringify(file,null,2)
        fs.writeFileSync('data.json',comp)
    }

    unComplete(un){
        let file = JSON.parse(this._file)
        for(let i=0;i<file.length;i++){
            if(file[i].id == un){
                file[i].status =' '
            }
        }
        let unComp = JSON.stringify(file,null,2)
        fs.writeFileSync('data.json',unComp)
    }

    listComplete(){
        let file = JSON.parse(this._file)
        let arrComplete = []
        for(let i = 0;i<file.length;i++){
            if(file[i].status === 'x'){
                arrComplete.push(file[i])
            }
        }
        return arrComplete
    }

    findId(find){
        let file = JSON.parse(this._file)
        let arrFind =[]
        for(let i=0;i<file.length;i++){
            // console.log(file[i])
            if(file[i].id === find){
               return file[i]
            }
        }
       
    }

    sortDate(sorts){
        let file = JSON.parse(this._file)
        for(let i=1;i<file.length;i++){
            for(let j=0;j<file.length;j++){
                if(sorts === 'asc'){
                    if(file[i].date < file[j].date){
                        var banding = file[i].date
                        file[i].date = file[j].date
                        file[i].date = banding
                    }
                }else if(sorts === 'desc'){
                    if(file[i].date > file[j].date){
                        var tukar = file[i].date
                        file[i].date = file[j].date
                        file[i].date = tukar
                    }
                }
            }
        }
    }
   



}

class List{
    constructor(id, task, status, date){
        this.id = id;
        this.task = task;
        this.status = status;
     
    }
}
let toDo = new Model('data.json')
toDo.sortDate()
module.exports = toDo

