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
	static writeFIle(listTask){
		return fs.writeFileSync('./database/data.json',listTask)
	}
	static add(taskAdded){
		
	}
}

//testing purpose


module.exports = Model