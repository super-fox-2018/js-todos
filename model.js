var fs = require("fs")


class Model {

	static read() {
		var file = fs.readFileSync("./data.json")
		var parse = JSON.parse(file)
		return parse
	}

	static save(file) {
		fs.writeFileSync("./data.json",file)
	}

	static list() {
		var parseFile = Model.read()
		var temp=""
		for(let i=0;i<parseFile.length;i++) {
			temp+=`${parseFile[i].id}. ${parseFile[i].status} ${parseFile[i].task} ${"\n"}`
		}
		return temp
	}

	static add(value) {
		var parseFile = Model.read()
		var obj = {}
		obj.id = parseFile.length+1
		obj.task = value
		obj.status = "[ ]"
		obj.created_date = new Date()
		obj.completed_date = ""
		parseFile.push(obj)
		var stringifiedFile = JSON.stringify(parseFile,null,4)
		Model.save(stringifiedFile)
	}

	static findById(value) {
		var parseFile = Model.read()
		for(let i=0;i<parseFile.length;i++) {
			if(parseFile[i].id ==  value) {
				return `${parseFile[i].id}. ${parseFile[i].task}`
			}
		}
		return `tidak ada id yang diminta`
	}

	static delete(value) {
		var parseFile = Model.read()
		var newResult = []
		for(let i=0;i<parseFile.length;i++) {
			if(parseFile[i].id != value) {
				newResult.push(parseFile[i])
			}else {

				var result = parseFile[i].task
			}
		}
		var stringifiedFile = JSON.stringify(newResult,null,4)
		Model.save(stringifiedFile)
		return result
	}

	static complete(value) {
		for(let i=0 ;i<parseFile.length;i++) {
			if(parseFile[i].id == value) {
				parseFile[i].status = "[x]"
				parseFile[i].completed_date = new Date()
			}
		}
		var stringifiedFile = JSON.stringify(parseFile,null,4)
		Model.save(stringifiedFile)

		var temp=""
		for(let i=0;i<parseFile.length;i++) {
			temp+=`${parseFile[i].id}. ${parseFile[i].status} ${parseFile[i].task} ${"\n"}`
		}
		return temp
	}

	static uncomplete(value) {
		for(let i=0 ;i<parseFile.length;i++) {
			if(parseFile[i].id == value) {
				parseFile[i].status = "[ ]"
				parseFile[i].completed_date = ""
			}
		}
		var stringifiedFile = JSON.stringify(parseFile,null,4)
		Model.save(stringifiedFile)

		var temp=""
		for(let i=0;i<parseFile.length;i++) {
			temp+=`${parseFile[i].id}. ${parseFile[i].status} ${parseFile[i].task} ${"\n"}`
		}
		return temp
	}

	static listCreated() {
		for(let i=0;i<parseFile.length;i++) {
			for(let j=i+1;j<parseFile.length;j++)
			if(parseFile[i].created_date < parseFile[j].created_date ) {
				var temp = parseFile[i]
				parseFile[i] = parseFile[j]
				parseFile[j] = temp
			}
		}
		var temp=""
		for(let i=0;i<parseFile.length;i++) {
			temp+=`${parseFile[i].id}. ${parseFile[i].status} ${parseFile[i].task} ${"\n"}`
		}
		return temp
		
	}

	static listCreatedAsc() {
		for(let i=0;i<parseFile.length;i++) {
			for(let j=i+1;j<parseFile.length;j++)
			if(parseFile[i].created_date > parseFile[j].created_date ) {
				var temp = parseFile[i]
				parseFile[i] = parseFile[j]
				parseFile[j] = temp
			}
		}
		var temp=""
		for(let i=0;i<parseFile.length;i++) {
			temp+=`${parseFile[i].id}. ${parseFile[i].status} ${parseFile[i].task} ${"\n"}`
		}
		return temp
		
	}

	static listCompleted() {
		for(let i=0;i<parseFile.length;i++) {
			for(let j=i+1;j<parseFile.length;j++)
			if(parseFile[i].completed_date < parseFile[j].completed_date ) {
				var temp = parseFile[i]
				parseFile[i] = parseFile[j]
				parseFile[j] = temp
			}
		}
		var temp=""
		for(let i=0;i<parseFile.length;i++) {
			temp+=`${parseFile[i].id}. ${parseFile[i].status} ${parseFile[i].task} ${"\n"}`
		}
		return temp
		
	}

	static listCompletedAsc() {
	for(let i=0;i<parseFile.length;i++) {
		for(let j=i+1;j<parseFile.length;j++)
		if(parseFile[i].completed_date > parseFile[j].completed_date ) {
			var temp = parseFile[i]
			parseFile[i] = parseFile[j]
			parseFile[j] = temp
		}
	}
	var temp=""
	for(let i=0;i<parseFile.length;i++) {
		temp+=`${parseFile[i].id}. ${parseFile[i].status} ${parseFile[i].task} ${"\n"}`
	}
	return temp
	
	}

	static tag(id,tags) {
		var task=""
		var tagss=""
		for(let i=0;i<parseFile.length;i++) {
			if(id == parseFile[i].id) {
				for(let j=0;j<tags.length;j++) {
					if(parseFile[i].tag.indexOf(tags[j]) == -1) {
						parseFile[i].tag.push(tags[j])
						tagss += tags[j] + " "
						task = parseFile[i].task
					}	
				}
				
			}
		}

		var stringifiedFile = JSON.stringify(parseFile,null,4)
		Model.save(stringifiedFile)
		
		return `Tagged task "${task}" with tags: ${tagss}`
	}

	static filter(value) {
		var temp=""
		for(let i = 0;i<parseFile.length;i++) {
			if(parseFile[i].tag.indexOf(value) !== -1) {
				temp+= `${parseFile[i].id}. ${parseFile[i].task} [${parseFile[i].tag}] ${"\n"}`
			}
		}

		return temp
	}



}

var parseFile = Model.read()
//console.log(Model.tag(2,["hello","world"]))
// parseFile[0].tag.push("a")
// console.log(parseFile)


module.exports = Model