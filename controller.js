const Model = require("./model.js")
const View = require("./view.js")

class Controller {
	static help() {
		View.getHelp();
	}

	static list() {
		var result = Model.list(); // ambil dr Model yg function list
		View.studentList(result) // kirim ke view
	}

	static addTask(task) {
		Model.addTask(task)
		View.addTask(task);
	}

	static findById(id) {
		let studentsData = Model.findById(id)
		View.findById(studentsData)
	}

	static deleteId(id) {
        let studentsData = Model.deleteId(id);
        Model.deleteId(id)
		View.deleteId(id);		
	}

	static complete(id) {
        let studentsData = Model.complete(id);
        Model.complete(id)
		View.complete(id)
    }

    static uncomplete(id) {
        let studentsData = Model.uncomplete(id);
        Model.uncomplete(id)
		View.uncomplete(id)
    }
    
    static listCompleted() {
		var result = Model.listCompleted()
		View.listCompleted(result)
    }
    
    static listCompletedAsc() {
        var result = Model.listCompletedAsc()
		View.listCompletedAsc(result)
    }
    
    static listCompletedDesc() {
        var result = Model.listCompletedDesc()
		View.listCompletedDesc(result)
    }
    
    static tag(id, theTag) {
		let result = Model.tag(id, theTag)
		View.tag(result)
    }
    
    static filter(filt){
        let result = Model.filter(filt)
        View.filter(result)
    }
}

module.exports = Controller