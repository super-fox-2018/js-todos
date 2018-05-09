//get value logic
let fs = require('fs');
// const view = require('./view.js')
// const controller = require('./controller.js')
let data = fs.readFileSync('data.json', 'utf8') //.split("\n")
// var input = process.argv[2]
let dataparse = JSON.parse(data)

class Model {


  static getHelp() {
    var help = ''
    help += 'node todo.js help \n'
    help += 'node todo.js list \n'
    help += 'node todo.js add <task_content> \n'
    help += 'node todo.js findById <task_id> \n'
    help += 'node todo.js delete <task_id> \n'
    help += 'node todo.js complete <task_id> \n'
    help += 'node todo.js uncomplete <task_id> \n'

    return help



  }


  static ListTodo() {
    let data = dataparse
    return data;

  }

  static tambahTags(id, ad) {

    let arrAdd = []
    this._parse = JSON.parse(data)

    for (let i = 0; i < this._parse.length; i++) {

      if (this._parse[i].Id === Number(id)) {
        this._parse[i].tags = ad
      }

    }
    var reparse = JSON.stringify(this._parse)
    fs.writeFileSync('data.json', reparse);

  }







  static Tambah(ad) {
    let arrAdd = []
    this._parse = JSON.parse(data)
    var objIsi = {}
    objIsi.Id = Number(this._parse[this._parse.length - 1].Id + 1)
    objIsi['task'] = ad
    objIsi['status'] = '[ ]'
    objIsi['date'] = new Date()
    this._parse.push(objIsi)
    var reparse = JSON.stringify(this._parse)
    fs.writeFileSync('data.json', reparse);
    let isiTambah = 'Added ' + ad + ' to your to do list...'



  }


  static Cari(id) {
    var a = []
    var dataFind = JSON.parse(data)

    for (let i = 0; i < dataFind.length; i++) {

      if (dataFind[i].Id === Number(id)) {
        a = (dataFind[i])
      }

    }
    return a
  }



  // static findbyTags(tag, datas) {
  //
  //   datas = JSON.parse(data)
  //   var a = []
  //   var dataFind = JSON.parse(datas)
  //
  //   for (let i = 0; i < dataFind.length; i++) {
  //
  //
  //     for (let j = 0; j < dataFind[i].tags.length; j++) {
  //
  //
  //       for (let k = 0; k < tag.length; k++) {
  //
  //         if (dataFind[i].tags[j] === tag[k]) {
  //           a.push(dataFind[i])
  //
  //         }
  //
  //       }
  //     }
  //
  //   }
  //   return a
  //
  //
  //
  // }




  static Hapus(id) {

    var result = []
    var dataDelete = JSON.parse(data)
    for (let i = 0; i < dataDelete.length; i++) {
      if (dataDelete[i].Id === Number(id)) {
        result = ('Deleted ' + dataDelete[i].task + ' to your to do list...');
        dataDelete.splice(i, 1)

      }
    }

    var reupdate = JSON.stringify(dataDelete)
    fs.writeFileSync('data.json', reupdate);
    return result


  }


  static Complete(id) {


    var dataComplete = JSON.parse(data)
    for (let i = 0; i < dataComplete.length; i++) {

      if (dataComplete[i].Id === Number(id)) {
        dataComplete[i].status = '[X]'
      }
    }
    fs.writeFileSync('data.json', JSON.stringify(dataComplete))


  }



  static notComplete(id) {

    var dataComplete = JSON.parse(data)
    for (let i = 0; i < dataComplete.length; i++) {

      if (dataComplete[i].Id === Number(id)) {
        dataComplete[i].status = '[ ]'
      }
    }
    fs.writeFileSync('data.json', JSON.stringify(dataComplete))
  }




}



module.exports = Model
