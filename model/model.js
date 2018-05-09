const fs = require('fs');

class Model {
  constructor() {
    this._data = [];
    this._file = './model/data.json';
    // this._file = './data.json'
  }
  // read
  readData() {
    let parser = fs.readFileSync(this._file, 'utf8');
    let jsonData = JSON.parse(parser)
    this._data = jsonData;
    return this._data
  }

  writeData() {
    // write to json file
    let string = JSON.stringify(this._data, null, 2)
    fs.writeFileSync('./model/data.json', string, 'utf8');
  }

  addList(task) {
    // add new task to array
    this.readData();
    let len = this._data.length;
    let id;

    if (len === 0) {
      id = 1;
    } else {
      id = this._data[len - 1]['id'] + 1;
    }

    let newTask = {
      'id': id,
      'task': task,
      'status': 'incomplete',
      'createdAt': 0,
      'tag': []
    }
    
    this._data.push(newTask);
    this.writeData();
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