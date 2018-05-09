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
}

//testing purpose


module.exports = Controller