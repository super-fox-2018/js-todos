const Controller = require("./controller.js") 
const argv = process.argv
const command = argv[2]
const value = argv[3]
 
if(command == "help" || command == undefined) {
	Controller.index()
}

if(command == "list") {
	Controller.list()
}

if(command == "add") {
	Controller.add(value)
}

if(command == "findById") {
	Controller.findById(value)
}

if(command == "delete") {
	Controller.delete(value)
}

if(command == "complete") {
	Controller.complete(value)
}

if(command == "uncomplete") {
	Controller.uncomplete(value)
}

if(command == "list:created") {
	if(value == "asc") {
		Controller.listCreatedAsc()
	}else{
		Controller.listCreated()
	}
}

if(command == "list:outstanding") {
	if(value == "asc") {
		Controller.listCreatedAsc()
	}else{
		Controller.listCreated()
	}
}


if(command == "list:completed") {
	if(value == "asc") {
		Controller.listCompletedAsc()
	}else{
		Controller.listCompleted()
	}
}

if(command == "tag") {
	Controller.tag(value,argv.slice(4))
	//if(value == argv.slice(2))
}

if(command == "filter:") {
	Controller.filter(value)
}



