const fs = require ("fs");

class Model{
  constructor(filename){
    this._filename = filename;
    this._data = this.Read();
  }

  Read(){
    let filestr = fs.readFileSync("data.json", "utf8");
    let data = JSON.parse(filestr);

    return data;
  }

  readOutstanding(){

    for(let i = 0; i < this._data.length;i++){
      if(this._data[i].status === "complete"){
        this._data.splice(i, 1);
        i=0;
      }
    }

    return this._data;
  }

  readComplete(){

    for(let i = 0; i < this._data.length;i++){
      if(this._data[i].status === "incomplete"){
        this._data.splice(i, 1);
        i=0;
      }
    }
    return this._data;
  }

  Write(){
    let content = JSON.stringify(this._data, null, 2);
    fs.writeFileSync(this._filename, content);

  }

  addTask(task){
    let date = new Date();
    let id;

    if(this._data.length !== 0){
      id = this._data[this._data.length -1].id + 1;
    }
    else{
      id = 1;
    }

    this._data.push({"id": id, "task": task, "status": "incomplete", "created_date": date, "tag": []});
    this.Write();
  }

  deleteTask(id){
    var data = this.Read();
    for(let i = 0; i < data.length; i++){
      if(data[i].id === parseInt(id)){
        data.splice(i, 1);
      }
    }
    this.Write();
  }

  find(id){
    var data = this.Read();
    for(let i = 0; i < data.length; i++){
      if(data[i].id === parseInt(id)){
        return data[i].task;
      }
    }
  }

  complete(id){
    for(let i = 0; i < this._data.length; i++){
      if(this._data[i].id === parseInt(id)){
         this._data[i].status = "complete";
         this._data[i].completed_date = new Date();
      }
    }
    this.Write();
    return this._data;
  }

  uncomplete(id){
    for(let i = 0; i < this._data.length; i++){
      if(this._data[i].id === parseInt(id)){
         this._data[i].status = "incomplete";
         this._data[i].completed_date = "";
      }
    }
    this.Write();
    return this._data;
  }

  sortCreatedAsc(){
    function compare(a,b){
      if (a.created_date < b.created_date){
        return -1;
      }
      if (a.created_date > b.created_date){
        return 1;
      }
      return 0;
    }
      this._data.sort(compare);
  }

  sortCreatedDesc(){
    function compare(a,b){
      if (a.created_date > b.created_date){
        return -1;
      }
      if (a.created_date < b.created_date){
        return 1;
      }
      return 0;
    }
      this._data.sort(compare);
  }

  sortOutstandingAsc(data){
    function compare(a,b){
      if (a.created_date < b.created_date){
        return -1;
      }
      if (a.created_date > b.created_date){
        return 1;
      }
      return 0;
    }
      data.sort(compare);

  }

  sortOutstandingDesc(data){
    function compare(a,b){
      if (a.created_date > b.created_date){
        return -1;
      }
      if (a.created_date < b.created_date){
        return 1;
      }
      return 0;
    }
      data.sort(compare);
  }
  sortCompletedAsc(data){
    function compare(a,b){
      if (a.completed_date < b.completed_date){
        return -1;
      }
      if (a.completed_date > b.completed_date){
        return 1;
      }
      return 0;
    }
      this._data.sort(compare);
  }

  sortCompletedDesc(data){
    function compare(a,b){
      if (a.completed_date > b.completed_date){
        return -1;
      }
      if (a.completed_date < b.completed_date){
        return 1;
      }
      return 0;
    }
      data.sort(compare);
  }

  tag(id, tag){
    for(let i = 0; i < this._data.length; i++){
      if(this._data[i].id === parseInt(id)){
        for(let k = 0; k < tag.length; k++){
          if(this._data[i].tag.indexOf(tag[k]) === -1){
            this._data[i].tag.push(tag[k]);
          }
        }
      }
    }
    this.Write();

  }

  filter(tag){
    var data = this.Read();
    for(let i = 0; i < data.length; i++){
      if(data[i].tag.indexOf(tag) === -1){
        data.splice(i,1);
        i=0;
      }
    }
    return data;
  }
}


let model = new Model("data.json");
model.filter("Hello");
module.exports = model

