const controller = require('./controller.js')
var input = process.argv[2]
let value = process.argv[3]
var control = new controller


// ARGV
if (input === 'help') {
  control.showhelp()
} else if (input === 'list' || input === 'list:created' && value === 'asc') {
  control.ViewData()

} else if (input === 'add') {
  control.Add(value)

} else if (input === 'find') {
  control.Find(value)

} else if (input === 'delete') {
  control.Delete(value)

} else if (input === 'complete') {
  control.Completed(value)

} else if (input === 'uncomplete') {
  control.Uncompleted(value)

} else if (input === 'list:completed' && value === 'desc') {
  control.ViewDesc()
} else if (input === 'list:completed' || input === 'list:completed' && value === 'asc') {
  control.ViewCompleted(value)

} else if (input === 'list:created' && value === 'desc') {
  control.Showdesc()

} else if (input === 'list:created' && value === 'desc') {
  control.Showdesc()

} else if (input === 'list:completed' && value === 'desc') {
  control.ViewDesc()
} else if (input === 'tags') {
  //Adding tags
  var isi = []
  for (i = 4; i < process.argv.length; i++) {
    if (isi.includes(process.argv[i]) === false) {
      isi.push(process.argv[i])
    }

  }

  control.Addtags(value, isi)


}
// else if ('filter' === input.split(':')[0]) {
//   control.FindTags(value)
// }
else {



}
