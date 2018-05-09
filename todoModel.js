const fs = require('fs')
class TodoModel {
    constructor() {
        this.id = 0
        this.task = ''
        this.status = ''
        this.tags = []
        this.createdAt = 0
    }
    static getHelp() {
        let arrHelp = 'help,list,add <task_content>,findById <task_id>,delete <task_id>,complete <task_id>,uncomplete <task_id>'
        return arrHelp
    }
    static read() {
        let jsonFile = fs.readFileSync('data.json', 'utf8')
        let arrJson = JSON.parse(jsonFile)
        return arrJson
    }
    static readById(id){
        let arrList = TodoModel.read()
        for (let i = 0; i < arrList.length; i++) {
            if (arrList[i].id.toString() === id.toString()) {
                return [arrList[i],i]
            }
        }
        return -1
    }
    static getLastId(){
        let arrList = TodoModel.read()
        let lastTask = arrList.slice(-1)[0]
        return lastTask.id;
    }

    addTodo(obj) {
        let arrList = TodoModel.read()
        arrList.push(obj)
        //write 
        let jsonString = JSON.stringify(arrList, null, 2)
        TodoModel.write(jsonString)
    }

    static write(string){
        fs.writeFileSync('data.json', string)
    }

}

module.exports = TodoModel;