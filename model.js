const fs = require('fs');

class Model{
  constructor(){
    this.list = ''
  }

  static readData(callback){
    let data = fs.readFile('data.json', 'utf-8', (err, data) => {
      if(err){
        console.log(`ERROR : ${err}`);
      } else {
        var objData = JSON.parse(data)
      }
      callback(objData)
    })
  }

  static saveData(data){
    let jsString = JSON.stringify(data)
    fs.writeFile('data.json', jsString, function(err){
        if(err) {
            return console.log(err);
        }
    })
  }

}
module.exports = Model;
