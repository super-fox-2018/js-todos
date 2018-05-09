const Controller = require("./controller.js")

class Model {
	static list() {
		let fs = require('fs')
		let studentsData = fs.readFileSync('data.json')
		studentsData = JSON.parse(studentsData)
		var data= []
		for(let i=0;i<studentsData.length;i++) {
			data.push(`${i+1}. ${studentsData[i].status} ${studentsData[i].task}`)
		}
		return data
	}

	static addTask(task){
		// let addNewStudent = Model.list()
		let fs = require('fs')
		let studentsData = fs.readFileSync('data.json')
		studentsData = JSON.parse(studentsData)
		let newStudent = {
			id: studentsData.length+1, // untuk nambah id per satu
			task: task,
			status: "[]",
			createdAt: new Date(),
			completedAt: null,
			tag: []
		}
		studentsData.push(newStudent)
		Model.writeData(studentsData)
		
	} 

	static writeData(newStudent){
        var fs = require("fs")
        // didalam JSON.stringify ada null, 2 itu supaya datanya g kesamping pas diarray, biar rapih kebawah
   	 	var data = fs.writeFileSync('data.json', JSON.stringify(newStudent, null, 2), "utf8")
	}

	static findById(id) {
		// let studentsData = Model.list();
		let fs = require('fs')
		let studentsData = fs.readFileSync('data.json')
		studentsData = JSON.parse(studentsData)
		for(let i=0; i<studentsData.length; i++){
            // == jadi bisa baca number maupung string klu === nilainya harus klu string" klu number"
			if(studentsData[i].id == id){
				return `${studentsData[i].id}: ${studentsData[i].task}`
			}
        }
        // klu di cek semua data dan id tidak ditemukan lngsung return tdk ditemukan
		return `Nomor ID not found`
	}

	static deleteId(id) {
		// let studentsData = Model.list()
		let fs = require('fs')
		let studentsData = fs.readFileSync('data.json')
		studentsData = JSON.parse(studentsData)
		for(let i=0; i<studentsData.length; i++){
			if(studentsData[i].id === +id) {
				studentsData.splice(i,1);
				Model.writeData(studentsData);
			}
        }
        // console.log(studentsData)
		return studentsData;
    }
    
    static complete(id){
		// let studentsData = Model.list()
		let fs = require('fs')
		let studentsData = fs.readFileSync('data.json')
		studentsData = JSON.parse(studentsData)
        for(let i=0; i<studentsData.length; i++){
            if(studentsData[i].id === +id){ // plus dibelakang id biar klu itu number ttp kebaca string
				studentsData[i].status = "[X]"
				studentsData[i].completedAt = new Date()
				Model.writeData(studentsData)
                break;
            }
        }
    }

    static uncomplete(id){
		// let studentsData = Model.list()
		let fs = require('fs')
		let studentsData = fs.readFileSync('data.json')
		studentsData = JSON.parse(studentsData)
        for(let i=0; i<studentsData.length; i++){
            if(studentsData[i].id === +id){
				studentsData[i].status = "[]"
				studentsData[i].completedAt = null
				Model.writeData(studentsData)
                break
            }
		}
	}
	
	static listCompleted(){
		let fs = require('fs')
		let studentsData = fs.readFileSync('data.json')
		studentsData = JSON.parse(studentsData)
		var dataCompleted = []
        for(let i=0; i<studentsData.length; i++){
            if(studentsData[i].status === "[X]"){
				dataCompleted.push(`${dataCompleted.length+1}. ${studentsData[i].status} ${studentsData[i].task} ${studentsData[i].completedAt}`)
            }
		}
		return dataCompleted.join("\n")
	}
	
	static listCompletedAsc(){
		let fs = require('fs')
		let studentsData = fs.readFileSync('data.json')
		studentsData = JSON.parse(studentsData)
		var dataCompleted = []
        for(let i=0; i<studentsData.length; i++){
            if(studentsData[i].status === "[X]"){
				dataCompleted.push(`ID ${studentsData[i].id} ${studentsData[i].status} ${studentsData[i].task} ${studentsData[i].completedAt}`)
            }
		}
		return dataCompleted.join("\n")
	}
	
	static listCompletedDesc(){
		let fs = require('fs')
		let studentsData = fs.readFileSync('data.json')
		studentsData = JSON.parse(studentsData)
		var dataCompleted = []
        for(let i=0; i<studentsData.length; i++){
            if(studentsData[i].status === "[X]"){
				dataCompleted.push(`ID ${studentsData[i].id} ${studentsData[i].status} ${studentsData[i].task} ${studentsData[i].completedAt}`)
            }
		}
		return dataCompleted.reverse(dataCompleted.completedAt).join("\n")
	}

	static tag(id, theTag){
		let fs = require ('fs')
		let studentsData = fs.readFileSync('data.json')
		studentsData = JSON.parse(studentsData)
		for(let i=0; i<studentsData.length; i++){
			if(studentsData[i].id == id){
				studentsData[i].tag.push(theTag)
				Model.writeData(studentsData)
				var result= `Tagged task ${studentsData[i].task} with tags ${theTag}`
			}
		}
		return result
	}

	static filter(filt){
		let fs = require ('fs')
		let studentsData = fs.readFileSync('data.json')
		studentsData = JSON.parse(studentsData)
		var result = []
		for(let i=0; i<studentsData.length; i++){
			if(studentsData[i].tag.indexOf(filt) !==-1){
				result.push(`${result.length+1}. ${studentsData[i].task} [${studentsData[i].tag}]`)
			}
		}
		return result.join('\n')
	}
}

module.exports = Model