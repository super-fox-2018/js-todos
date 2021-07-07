let command = process.argv.slice(2)
let controller = require('./controller/controller.js')

if (command[0]===undefined || command[0]==='help') {
	controller.help()
}
if (command[0]==='list') {
	controller.list()
}
if (command[0]==='add') {
	let addTask = command.slice(1)
	controller.add(addTask)
	console.log(addTask)
}
if (command[0]==='findById') {
	let idToFind = Number(command[1])
	controller.findById(idToFind)
}
if (command[0]==='delete') {
	let idToDel = Number(command[1])
	controller.deleteById(idToDel)
}
if (command[0]==='complete') {
	let idToComp = Number(command[1])
	controller.completeById(idToComp)
}
if (command[0]==='uncomplete') {
	let idToUnComp = Number(command[1])
	controller.uncompleteById(idToUnComp)
}