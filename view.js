class View {
	static getHelp() {
		console.log('$ node todo.js')
        console.log(`$ node todo.js help`)
        console.log(`$ node todo.js list`)
        console.log(`$ node todo.js add <task_content>`)
        console.log(`$ node todo.js findById(task_id)`)
        console.log(`$ node todo.js delete <task_id>`)
        console.log(`$ node todo.js complete <task_id>`)
        console.log(`$ node todo.js uncomplete <task_id>`)
        console.log(`$ node todo.js list:created <task_id>`)
        console.log(`$ node todo.js list:completed <task_id>`)
        console.log(`$ node todo.js tag <task_id>`)
    }

	static studentList(result){ // dpt dr controller
        console.log(result.join("\n"))
	}

	static addTask(task){
		console.log(`Added ${task} to your TODO List`)
	}

	static findById(id){
		console.log(id)
	}

	static deleteId(id){
		console.log(`The Id ${id} has been deleted`)
    }
    
    static complete(id){
		console.log(`Update ${id} status from your TODO List`)
    }

    static uncomplete(id){
		console.log(`Update ${id} status from your TODO List`)
    }
    
    static listCompleted(result){
        console.log(result)
    }

    static listCompletedAsc(result){
        console.log(result)
    }

    static listCompletedDesc(result){
        console.log(result)
    }

    static tag(result){
        console.log(result)
    }

    static filter(result){
        console.log(result)
    }
}

module.exports = View