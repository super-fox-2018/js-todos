const Model = require('./model.js');
const View = require('./view.js');



class Controler{
    constructor(){

    }

    help(){
        View.viewHelp()
    }
    
    listTask(){
        var arrData = Model.file;
        View.listTask(arrData);
    }

    addTask(newTask){
        var task = newTask;
        //cari id
        var arrData = Model.file;
        var lastObj = arrData[arrData.length-1];
        var lastId = lastObj.id + 1;
        var objTask = new Task(lastId, task)
        Model.add(objTask);
    }

    findId(id){
        let myId = id
        var arrData = Model.file
        View.foundId(arrData, myId)
    }

    delete(id){
        var arrData = Model.file
        var delId = id;
        var idx = 0
        for(let a = 0; a < arrData.length; a++){
            if(arrData[a].id == delId){
                idx = a;
                break;
            }
        }
        View.delete(arrData[idx].task);
        Model.delete(idx);
    }

    completed(id, ckList){
        var status = ckList;
        var arrData = Model.file
        var delId = id;
        var idx = 0
        for(let a = 0; a < arrData.length; a++){
            if(arrData[a].id == delId){
                idx = a;
                break;
            }
        }
        Model.updateCompleted(idx, status);
        View.listTask(arrData);
    }

    sortByCreated(style){
        var arrData = Model.file;
        var arr = arrData;
        var sortStyle = style;

        //sort
        if(style === 'asc'){
            for(let a=0; a< arr.length; a++){
                var temp = a;
                    
                for(let b=a; b< arr.length; b++){
                    if(arr[b].createAt < arr[temp].createAt){
                      temp = b;
                    }
                }
                
                if(temp !== a){
                  var tempNum = arr[a];
                      arr[a] = arr[temp];
                      arr[temp] = tempNum;
                }
                
            }
        }else if (style === 'desc'){
            for(let a=0; a< arr.length; a++){
                var temp = a;
                    
                for(let b=a; b< arr.length; b++){
                    if(arr[b].createAt > arr[temp].createAt){
                      temp = b;
                    }
                }
                
                if(temp !== a){
                  var tempNum = arr[a];
                      arr[a] = arr[temp];
                      arr[temp] = tempNum;
                }
                
            }
        }
        View.listTask(arr);
    }

    sortByCompleted(style, ){
        var arrData = Model.file;
        var arr = arrData;
        var sortStyle = style;

        //sort
        if(style === 'asc'){
            for(let a=0; a< arr.length; a++){
                var temp = a;
                    
                for(let b=a; b< arr.length; b++){
                    if(arr[b].completedAt < arr[temp].completedAt){
                      temp = b;
                    }
                }
                
                if(temp !== a){
                  var tempNum = arr[a];
                      arr[a] = arr[temp];
                      arr[temp] = tempNum;
                }
                
            }
        }else if (style === 'desc'){
            for(let a=0; a< arr.length; a++){
                var temp = a;
                    
                for(let b=a; b< arr.length; b++){
                    if(arr[b].completedAt > arr[temp].completedAt){
                      temp = b;
                    }
                }
                
                if(temp !== a){
                  var tempNum = arr[a];
                      arr[a] = arr[temp];
                      arr[temp] = tempNum;
                }
                
            }
        }
        View.listCompleted(arr);
}

addTag(idx, arrTag){
    
    var arrData = Model.file;
    var fIdx = idx;
    var listTag = arrTag;
    var tagModel = [];
    var indxFile = 0
    
    for(let a = 0; a < arrData.length; a++ ){
        if(arrData[a].id === Number(fIdx)){
            var tagfile = arrData[a].tag;
            for(let b = 0; b < listTag.length; b++){
                if(tagfile.indexOf(listTag[b]) === -1 ){
                    tagfile.push(listTag[b]);
                }
            }
            indxFile = a
            break;
        }
    }
    Model.updateTag(indxFile, tagfile);
}

findTag(value){
    var arrData = Model.file;
    var tag = value;
    console.log(tag);
    var idxTag = [];
    for(let a = 0; a < arrData.length; a++){
        //console.log(arrData[a].tag);
        var dataTag = arrData[a];  
        for(let b = 0; b < dataTag.tag.length; b++){
            //console.log(dataTag.tag[b]);
            let findTag = dataTag.tag[b];   
            if(findTag === tag){
                idxTag.push(dataTag);
                break;
            }  
        }
    }
    //console.log(idxTag);
    for(let a=0; a< idxTag.length; a++){
        var temp = a;
            
        for(let b=a; b< idxTag.length; b++){
            if(idxTag[b].createAt < idxTag[temp].createAt){
              temp = b;
            }
        }
        
        if(temp !== a){
          var tempNum = idxTag[a];
              idxTag[a] = idxTag[temp];
              idxTag[temp] = tempNum;
        }
        
    }

    View.viewFilterTag(idxTag);
}


}

class Task{
    constructor(id, value){
        this.id = id;
        this.task = value;
        this.createAt = new Date();
        this.completed = false;
        this.completedAt = new Date();
        this.tag = [];
    }
}

let controller = new Controler


module.exports = controller;


