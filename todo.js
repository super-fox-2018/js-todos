// input code

const argv = process.argv
const controller = require("./controller.js")

class ToDo {

    constructor () {
    }

    static retrievecommand (str) {
        if(str === undefined) {
            controller.undefined()
        } else if (str === 'help') {
            controller.help()
        } else if (str === 'list') {
            controller.list()
        } else if (str === 'add') {
            controller.add(argv[3])
        } else if (str === 'findById') {
            controller.findById(argv[3])
        } else if (str === 'delete') {
            controller.delete(argv[3])
        } else if (str === 'complete') {
            controller.complete(argv[3])
        } else if (str === 'uncomplete') {
            controller.uncomplete(argv[3])
        } else if (str === 'list:created') {
            controller.time(argv[3]) // asc || desc
        } else if (str === 'list:completed') {
            controller.filterCompleted (argv[3]) // asc || desc
        } else if (str === 'tag') {
            controller.assignTag (argv)
        } else if (str === 'filter') {
            controller.tagFilter (argv[3])
        }
    }
}


module.exports = ToDo
ToDo.retrievecommand(argv[2])

// Date.now ()
