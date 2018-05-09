const View = require('./view.js')
const Model = require('./modal.js');
// let fs = require('fs');
// let data = fs.readFileSync('data.json', 'utf8') //.split("\n")


class Controller {
  constructor() {

  }

  ViewData() {
    var view = Model.ListTodo()
    View.viewList(view)
  }


  ViewCompleted() {
    var view = Model.ListTodo()
    View.viewcompleted(view)
  }


  ViewDesc() { // COMPLETED TASK DESC
    var view = Model.ListTodo()
    View.viewDescending(view)
  }


  Showdesc() { // ALL TASK DESC
    var view = Model.ListTodo()
    View.showdes(view)
  }


  showhelp() {
    const helpString = Model.getHelp() // ambil data di model
    View.viewHelp(helpString) // nampilin
  }

  Add(ad) {
    Model.Tambah(ad)
  }


  Addtags(id, ad) { //tags
    Model.tambahTags(id, ad)
  }


  Find(id) {
    View.viewCari(Model.Cari(id))
  }

  // FindTags(tag) {
  //   var val = Model.findbyTags(tag, data)
  //   View.viewTag(val)
  // }



  Delete(id) {
    Model.Hapus(id)
  }


  Completed(id) {
    Model.Complete(id)
  }


  Uncompleted(id) {
    Model.notComplete(id)
  }

}



module.exports = Controller
