const fs = require('fs');

class Model {
  constructor() {
    this._data = [];
    this._file = './model/data.json';
  }
  // list
  listData() {
    return this.readData();
  }

  readData() {
    let parser = fs.readFileSync(this._file, 'utf8');
    let jsonData = JSON.parse(parser)
    this._data = jsonData;
    return this._data
  }

  writeData() {

  }
}

module.exports = Model
// let model = new Model();
// console.log(model.listData());