"use strict"

class View{
    static help(){
        let guideString = 'node todo.js '
        console.log(guideString)
        console.log(guideString+'help')
        console.log(guideString+'list')
        console.log(guideString+'add <task_content>')
        console.log(guideString+'findById <task_id>')
        console.log(guideString+'delete <task_id>')
        console.log(guideString+'complete <task_id>')
        console.log(guideString+'uncomplete <task_id>')
    }

    static getList(todoList){
        if(todoList.length < 1){
            console.log('no list to display')
            return
        }
        for(let i = 0; i < todoList.length; i++){
            let marked = ' '
            if(todoList[i].status === 'completed'){
             marked = 'X'   
            }
            console.log(`[${marked}] ${todoList[i].id}. ${todoList[i].content}`)
        }
    }


    static addTask(task){
        console.log(`${task} has been added to your ToDo List`)
    }

    static findById(todoList){
        let tags = todoList.tags.length > 0 ? todoList.tags : "\"no tags\""
        console.log(`status: ${todoList.status} | id: ${todoList.id} | content: ${todoList.content} | tags: ${tags}`)
    }

    static deleteById(todoList){
        if(todoList === undefined){
            console.log('data from the searched id is not found')
            return
        }
        console.log(`${todoList.content} has been deleted to your ToDo List`)
    }

    static addTag(todoList,index){
        if(todoList === false){
            console.log('data from the searched id is not found')
            return
        }
        console.log(`Tagged ${todoList[0][index].content} with tags: ${todoList[1].join(' ')}`)
    }

    static unTag(todoList,index){
        if(todoList === false){
            console.log('data from the searched id is not found')
            return
        }
        console.log(`unTagged ${todoList[0][index].content} from tags: ${todoList[1].join(' ')}`)
    }

    static filteredList(todoList,filter){
        console.log(`filter: ${filter}`)
        for(let i = 0; i < todoList.length; i++){
                console.log(`${todoList[i].id}. ${todoList[i].content} [${todoList[i].tags}]`)
        }
    }
}

module.exports = View