const Model = require("./model.js")
const View = require("./view.js")

class Controller {

	static index() {
		View.index()
	}

	static list() {
		var result = Model.list()
		View.list(result)
	}

	static add(value) {
		Model.add(value)
		View.add(value)
	}

	static findById(value) {
		var result = Model.findById(value)
		View.findById(result)
	}

	static delete(value) {
		var result = Model.delete(value)
		View.delete(result)
	}

	static complete(value) {
		var result = Model.complete(value)
		View.complete(result)
	}

	static uncomplete(value) {
		var result = Model.uncomplete(value)
		View.uncomplete(result)
	}

	static listCreated() {
		var result = Model.listCreated()
		View.listCreated(result)
	}

	static listCreatedAsc() {
		var result = Model.listCreatedAsc()
		View.listCreatedAsc(result)
	}

	static listCompleted() {
		var result = Model.listCompleted()
		View.listCompleted(result)
	}

	static listCompletedAsc() {
		var result = Model.listCompletedAsc()
		View.listCompletedAsc(result)
	}

	static tag(id,tags) {
		var result = Model.tag(id,tags)
		View.tag(result)
	}

	static filter(value) {
		var result = Model.filter(value)
		View.filter(result)
	}
}




module.exports = Controller