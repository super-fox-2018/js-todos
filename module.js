// edit database

const fs = require("fs")
const dataJSON = fs.readFileSync("./data.json", "utf8") 
const data = JSON.parse(dataJSON)
const display = require("./display.js")

class Modular {

    constructor () {
        this._task = []
    }

    get task () {
        return this._task
    } 
    set task (newTask) {
        this._task = newTask
    }

    retrieve () {
        for(let x=0; x<data.length; x++) {
            this.task.push(data[x])
        }
    }

    list () {
        this.retrieve ()
        let taskList = []
        for(let y=0; y<this.task.length; y++) {
            taskList.push([this.task[y].id+'. '+this.task[y].stats+' '+this.task[y].task])
        }
        display.displayList (taskList)
    }

    add (str) {
        this.retrieve ()
        this.task.push({id : this.task.length+1, stats : "[ ]", task : str})
        display.displayAdd(str)
        const overwrite = JSON.stringify(this.task, null , 2)
        fs.writeFileSync("./data.json", overwrite, "utf8") 
    }
    
    search (idNum) {
        this.retrieve ()
        let searched 
        for(let s=0; s<this.task.length; s++) {
            if(this.task[s].id==idNum) {
                searched = this.task[s].id+'. '+this.task[s].stats+' '+this.task[s].task
            }
        }
        display.searchId (searched)
    }

    delete (idNum) {
        this.retrieve () 
        let taskArr = this.task
        for(let z=0; z<taskArr.length; z++) {
            if(taskArr[z].id==idNum) {
                let str = taskArr[z].task
                display.displayDelete(str)
                taskArr.splice(z,1)
               
            }
        }
        const overwrite2 = JSON.stringify(this.task, null , 2)
        fs.writeFileSync("./data.json", overwrite2, "utf8")
    }

    complete (idNum) {
        this.retrieve ()
        let taskArr = this.task
        for(let w=0; w<taskArr.length; w++) {
            if(taskArr[w].id==idNum) {
                taskArr[w].stats="[x]"
            }
        }
        const overwrite3 = JSON.stringify(this.task, null , 2)
        fs.writeFileSync("./data.json", overwrite3, "utf8")
        let taskList = []
        for(let y=0; y<this.task.length; y++) {
            taskList.push([this.task[y].id+'. '+this.task[y].stats+' '+this.task[y].task])
        }
        display.displayList (taskList)
    }

    uncomplete (idNum) {
        this.retrieve ()
        let taskArr = this.task
        for(let f=0; f<taskArr.length; f++) {
            if(taskArr[f].id==idNum) {
                taskArr[f].stats="[ ]"
            }
        }
        const overwrite4 = JSON.stringify(this.task, null , 2)
        fs.writeFileSync("./data.json", overwrite4, "utf8")
        let taskList = []
        for(let y=0; y<this.task.length; y++) {
            taskList.push([this.task[y].id+'. '+this.task[y].stats+' '+this.task[y].task])
        }
        display.displayList (taskList)
    }

    time (sort) {
        this.retrieve ()
    }

    filterCompleted (sort) {
        this.retrieve ()

    }

    assignTag (arr) {
        this.retrieve ()
        
    }

    tagFilter (str) {
        this.retrieve ()

    }
}

let modular = new Modular ()
module.exports = modular





