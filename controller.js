// control all process

const todo = require("./todo.js") 
const modular = require("./module.js")
const display = require("./display")

class Controller {

    constructor () {
    }

    static undefined () {
        display.displayUndefined ()
    }

    static help () {
        display.displayHelp ()
    }

    static list () {
        modular.list ()
    }

    static add (str) {
        modular.add(str)
    }

    static findById (idNum) {
        modular.search(idNum)
    }

    static delete (idNum) {
        modular.delete(idNum)
    }

    static complete (idNum) {
        modular.complete (idNum)
    }

    static uncomplete (idNum) {
        modular.uncomplete (idNum)
    }

    static time (sort) {
        modular.time (sort)
    }

    static filterCompleted (sort) {
        modular.filterCompleted (sort)
    }

    static assignTag (arr) {
        modular.assignTag (arr)
    }

    static tagFilter (str) {
        modular.tagFilter (str)
    }
}

module.exports = Controller