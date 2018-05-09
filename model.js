const controller = require('./controller.js');
var fs = require('fs');

class Model {
  constructor() {
    this.help = ["node todo.js"];
    this.listCompleted = [];
    this.listOutstanding = [];
    this.list = this.read();
  }
  read(){
    var dataJSON = fs.readFileSync('data.json','utf8');
    let list = JSON.parse(dataJSON);
    // console.log(data);
    return list;
  }
  add(content){
    var data = this.list;
    var addData = {id:'',task:''} ;
    addData.status = "[ ]";
    addData.date = new Date();
    addData.id = (data[data.length-1].id)+1;
    addData.task = content;
    data.push(addData);
    var addJSON = JSON.stringify(data, null, 2);
    var writeJSON = fs.writeFileSync('data.json',addJSON);
    return addData;
  }
  find(id){
    var findData = this.list;
    for (var i = 0; i < findData.length; i++) {
      if (findData[i].id===Number(id)) {
        return findData[i];
      }
    }
  }
  delete(id){
    var delData = this.list;
    for (var i = 0; i < delData.length; i++) {
      if (delData[i].id===Number(id)) {
        var del = delData[i];
        delData.splice(i,1);
      }
    }
    var delJSON = JSON.stringify(delData, null, 2);
    var writeJSON = fs.writeFileSync('data.json',delJSON);
    return del;
  }
  completed(id){
    var compData = this.list;
    for (var i = 0; i < compData.length; i++) {
      if (compData[i].id===Number(id)) {
        compData[i].status = '[X]';
      }
    }
    var compJSON = JSON.stringify(compData, null, 2);
    var writeJSON = fs.writeFileSync('data.json',compJSON);
    return compData;
  }
  uncomplete(id){
    var uncompData = this.list;
    for (var i = 0; i < uncompData.length; i++) {
      if (uncompData[i].id===Number(id)) {
        uncompData[i].status = '[ ]';
      }
    }
    var uncompJSON = JSON.stringify(uncompData, null, 2);
    var writeJSON = fs.writeFileSync('data.json',uncompJSON);
    return uncompData;
  }
  outstandingList(list){
    var outstandData = this.list;
    var outstandList = this.listOutstanding;
    for (var i = 0; i < outstandData.length; i++) {
      if (outstandData[i].status=='[ ]') {
        var slice = outstandData.slice(i,i+1);
        outstandList.push(slice);
      }
    }
    // return list;
    if (list=='desc') {
      outstandList.sort(function(a,b){
        return a.date < b.date
      })
      return outstandList;
    }
    else if(list=='asc') {
      outstandList.sort(function(a,b){
        return a.date > b.date
      })
      return outstandList;
    }
    return outstandList;
  }
  completedList(){
    var compData = this.list;
    var compList = this.listCompleted;
    for (var i = 0; i < compData.length; i++) {
      if (compData[i].status=='[X]') {
        var slice = compData.slice(i,i+1);
        compList.push(slice);
      }
      // console.log(this.listOutstanding);
    }
    return compList;
  }
  createdList(list){
    var data = this.list;
    if (list=='desc') {
      data.sort(function(a,b){
        return a.date < b.date
      })
      // return data;
    }
    else if(list=='asc') {
      data.sort(function(a,b){
        return a.date > b.date
      })
    }
    return data;
  }


}


var model = new Model;
// model.findById();
module.exports = model;
