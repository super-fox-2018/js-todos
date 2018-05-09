let command = process.argv.slice(2)
let controller = require('./controller/controller.js')

if (command[0]===undefined || command[0]==='help') {
	controller.help()
}
if (command[0]==='list') {
	controller.list()
}
if (command[0]==='add') {
	controller.add(commands[1])
}