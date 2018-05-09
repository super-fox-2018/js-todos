class View {

	static index() {
		console.log("$ node todo.js")
		console.log("$ node todo.js help")
		console.log("$ node todo.js list")
		console.log("$ node todo.js add <task_content>")
		console.log("$ node todo.js findById <task_id>")
		console.log("$ node todo.js delete <task_id>")
		console.log("$ node todo.js complete <task_id>")
		console.log("$ node todo.js uncomplete <task_id>")
	}

	static list(result) {
		console.log(result)
	}

	static add(value) {
		console.log(`Added ${value} to your TODO list`)
	}

	static findById(result) {
		console.log(result)
	}

	static delete(result) {
		console.log(`Deleted ${result} from your TODO list`)
	}

	static complete(result) {
		console.log(result)
	}

	static uncomplete(result) {
		console.log(result)
	}

	static listCreated(result) {
		console.log(result)
	}

	static listCreatedAsc(result) {
		console.log(result)
	}

	static listCompleted(result) {
		console.log(result)
	}

	static listCompletedAsc(result) {
		console.log(result)
	}

	static tag(result) {
		console.log(result) 
	}

	static filter(result) {
		console.log(result)
	}
}

module.exports = View