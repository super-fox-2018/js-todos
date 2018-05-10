let fs = require('fs')
class Model{

	static test(){
		console.log('Model')
	}
	static readFile(){
		let data = fs.readFileSync('./database/data.json','UTF-8')
		data = JSON.parse(data)
		return data
	}
	static writeFile(listTask){
		return fs.writeFileSync('./database/data.json',listTask)
	}
	static add(taskAdded){
		let addedList = ''
		for(var i=0;i<taskAdded.length;i++){
			addedList+= taskAdded[i]+' '
		}
		let listTask = this.readFile()
		let idTask = 0
		if (listTask.length!==0) {
			idTask = listTask[listTask.length-1].id
		}
		let newListTask = {
			task: addedList,
			id: idTask+1,
			mark: '[ ]',
			createdAt: new Date().toISOString()
		}
		listTask.push(newListTask)
		listTask = JSON.stringify(listTask)
		this.writeFile(listTask)
		return addedList
	}
	static findById(id){
		let listData = this.readFile()
		for(var i=0;i<listData.length;i++){
			if (listData[i].id===id) {
				return listData[i]
			}
		}
	}
	static delete(id){
		let listData = this.readFile()
		let dataDeleted = null
		for(var i=0;i<listData.length;i++){
			if (listData[i].id===id) {
				dataDeleted = listData[i]
				delete listData[i]
			}
			if (listData[i]!==undefined && listData[i].id!== i+1) {
				listData[i].id=i+1
			}
		}
		listData = JSON.stringify(listData)
		this.writeFile(listData)
		return dataDeleted
	}
	static complete(id){
		let listData = this.readFile()
		for(var i=0;i<listData.length;i++){
			if (listData[i].id===id) {
				listData[i].mark = '[X]'
			}
		}
		listData = JSON.stringify(listData)
		this.writeFile(listData)
		return this.readFile()
	}
	static uncomplete(id){
		let listData = this.readFile()
		for(var i=0;i<listData.length;i++){
			if (listData[i].id===id) {
				listData[i].mark = '[ ]'
			}
		}
		listData = JSON.stringify(listData)
		this.writeFile(listData)
		return this.readFile()
	}
}

//testing purpose
//console.log(Model.add())

module.exports = Model