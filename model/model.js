const fs = require('fs');

class Model {
  constructor() {
    this._data = [];
    this._file = './model/data.json';
    this._trackId = [];
    // this._file = './data.json'
  }
  // list
  listData() {
    let lists = this.readData();
    return lists;
  }

  readData() {
    let parser = fs.readFileSync(this._file, 'utf8');
    let jsonData = JSON.parse(parser)
    this._data = jsonData;
    return this._data
  }

  writeData(task) {
    // add new task to array
    this.readData();
    let len = this._data.length;

    let newTask = {
      'id': len + 1,
      'task': task
    }
    this._data.push(newTask);
    // write to json file
    let string = JSON.stringify(this._data, null, 2)
    fs.writeFileSync('./model/data.json', string, 'utf8');
  }

  findById(id) { // return found object
    let lists = this.readData();
    // console.log(lists)
    for (let i = 0; i < lists.length; i++) {
      let list = lists[i];
      if (id == list['id']) return list;
    }
  }

  deleteById(id, lists) {
    // splice
    // let lists = this.readData();
    for (let i = 0; i < lists.length; i++) {
      let list = lists[i];
      if (id == list['id']) {
        lists.splice(i, 1);
        break;
      }
    }

    this._data = lists;
    let string = JSON.stringify(this._data, null, 2)
    fs.writeFileSync('./model/data.json', string, 'utf8');
  }
}

module.exports = Model
// let model = new Model();
// console.log(model.findById(2));