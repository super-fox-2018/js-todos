const TodoModel = require('./todoModel.js');
const TodoView = require('./todoView');
class TodoController {
    static getHelp() {
        let arrHelp = TodoModel.getHelp().split(',')
        let arrResult = ['node todo.js'];
        for (let i = 0; i < arrHelp.length; i++) {
            arrResult.push("node todo.js " + arrHelp[i])
        }
        TodoView.viewHelp(arrResult);
    }
    static getList(listFilter, option) {
        let arrOPt = listFilter.split(':')
        let filterTag = arrOPt[0]
        let filter = arrOPt[1];
        let arrList = TodoModel.read()
        let arrView = [];
        if (filter === 'created' && option === 'desc') {
            arrList.sort(function (a, b) {
                return a.createdAt < b.createdAt
            })
        } else {
            arrList.sort(function (a, b) {
                return a.createdAt > b.createdAt
            })
        }

        let arrFilter = [];
        if (filter === 'completed') {
            for (let i = 0; i < arrList.length; i++) {
                let checkList = ''
                if (arrList[i].status === 'complete') {
                    checkList = '[x]';
                    let str = `${arrList[i].id}. ${checkList} ${arrList[i].task}`
                    arrView.push(str);
                }
            }
        } else if (filterTag === 'filter') {  //filter tags
            // console.log (arrList[0].tags.indexOf('hobby'))
            for (let i = 0; i < arrList.length; i++) {
                let checkList = ''
                if (arrList[i].status === 'complete') {
                    checkList = '[x]';
                } else {
                    checkList = '[ ]'
                }
                if (arrList[i].tags.length !== 0 && arrList[i].tags.indexOf(filter) !== -1) {
                    checkList = '[x]';
                    let str = `${arrList[i].id}. ${checkList} ${arrList[i].task}`
                    arrView.push(str);
                }
            }
        }
        else {
            for (let i = 0; i < arrList.length; i++) {
                let checkList = ''
                if (arrList[i].status === 'complete') {
                    checkList = '[x]';
                } else {
                    checkList = '[ ]'
                }
                let str = `${arrList[i].id}. ${checkList} ${arrList[i].task}`
                arrView.push(str);
            }
        }
        TodoView.viewList(arrView);
    }

    static setStatus(status, id) {
        let arrTodo = TodoModel.readById(id);
        let arrList = TodoModel.read()
        for (let i = 0; i < arrList.length; i++) {
            if (arrList[i].id == id) {
                arrList[i].status = status;
            }
        }
        let jsonString = JSON.stringify(arrList, null, 2)
        let msg = `Status ${arrTodo[0].id}. ${arrTodo[0].task} change to ${arrTodo[0].status}`;
        TodoModel.write(jsonString)
        TodoView.view(msg)
    }

    static add(task) {
        let todo = new TodoModel()
        todo.task = task
        todo.status = 'New'
        todo.id = TodoModel.getLastId() + 1
        todo.createdAt = Date.now();
        todo.addTodo(todo)
    }
    static findById(id) {
        let arrTodo = TodoModel.readById(id);
        if (arrTodo !== -1) {
            TodoView.view(`${arrTodo[0].id}. ${arrTodo[0].task}`)
        }
    }
    static delete(id) {
        let arrTodo = TodoModel.readById(id)
        let detMsg = `Deleted "${arrTodo[0].task}" from your TODO list..`
        let arrList = TodoModel.read()
        arrList.splice(arrTodo[1], 1)
        //write new arr.
        let jsonString = JSON.stringify(arrList, null, 2)
        TodoModel.write(jsonString)
        TodoView.view(detMsg)
    }

    static addTag(arrArgv) {
        let id = arrArgv[3]
        let arrTag = [];
        let arrTodo = TodoModel.readById(id);
        let msg = '';
        if (arrTodo !== -1) {
            for (let i = 4; i < arrArgv.length; i++) {
                arrTag.push(arrArgv[i])
            }
            let arrList = TodoModel.read()
            for (let i = 0; i < arrList.length; i++) {
                if (arrList[i].id == id) {
                    arrList[i].tags = arrTag;
                    msg = `Tagged task "${arrList[i].task}" with tags: ${arrList[i].tags.join(' ')}`
                    break
                }
            }
            let jsonString = JSON.stringify(arrList, null, 2)
            TodoModel.write(jsonString)
        }else{
            msg = `id ${id} tidak ditemukan`;
        }
        TodoView.view(msg)
    }
}

module.exports = TodoController;