const fs = require('fs');

let tampil = fs.readFileSync('data.json', 'utf8');
let tampilConv = JSON.parse(tampil);
//console.log(tampilConv);


class Model{
    constructor(){
        this._file = [] ;
    }

    get file(){
        return this._file;
    }
    
    read(file){
        var readFile = fs.readFileSync(file, 'utf8');
        var convertFile = JSON.parse(readFile);
        this._file = convertFile;
    }

    add(dataObj){
        var arrData = this._file;
        arrData.push(dataObj)
        this.write()
    }

    delete(idx){
        var arrData = this._file;
        var delId = idx;
        arrData.splice(idx, 1);
        this.write();
    }

    updateCompleted(idx, value){
        var arrData = this._file;
        var upId = idx;
        arrData[idx].completed = value;
        if(arrData[idx].completed){
            arrData[idx].completedAt = new Date();
        }
        this.write();
    }

    updateTag(idx, value){
        var arrData = this._file;
        var upId = idx;
        arrData[idx].tag = value;
        this.write();
       
    }

    write(){
        var newData = JSON.stringify(this._file);
        fs.writeFileSync('data.json', newData);
        return 'data sudah dibuat';
    }

}

let model = new Model('data.json');
model.read('data.json');


module.exports = model;

