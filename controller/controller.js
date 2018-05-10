let model = require('../models/model.js')
let view = require('../view/view.js')

class Controller{
	static help(){
		view.help()
	}
	static list(){
		let list = model.readFile()
		view.list(list)
	}
	static add(taskAdded){
		let addedList = model.add(taskAdded)
		view.add(addedList)
	}
	static findById(id){
		let idToFind = model.findById(id)
		view.findById(idToFind)
	}
	static deleteById(id){
		let idToDel = model.delete(id)
		view.deleteById(idToDel)
	}
	static completeById(id){
		let completeById = model.complete(id)
		view.list(completeById)
	}
	static uncompleteById(id){
		let uncompleteById = model.uncomplete(id)
		view.list(uncompleteById)
	}
}

//testing purpose


module.exports = Controller