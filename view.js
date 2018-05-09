const Controller = require('./controller.js')

class View{
    constructor(){

    }
    
    viewHelp(){
        let listHelp = ['node todo.js help',
                         'node todo.js list',
                         'node todo.js add <task_content>',
                         'node todo.js findById <task_id>',
                         'node todo.js delete <task_id>',
                         'node todo.js complete <task_id>',
                         'node todo.js uncomplete <task_id>',
                         'node todo.js list:created asc | desc',
                         'node todo.js list:completed asc | desc',
                         'node todo.js tag <task id>  <tag_name1><tag_name2>...<tag_name_N>',
                         'node todo.js filter:<tag_name>'];

        for(let a = 0; a < listHelp.length; a++ ){
             console.log(listHelp[a])
            }
        
    }

    listTask(arrTask){
        let dataTask = arrTask;
        for(let a = 0; a < dataTask.length; a++){
            let check = ''
            if(dataTask[a].completed){
                check = 'x'
            }
           console.log(`${dataTask[a].id}. [${check}] ${dataTask[a].task} `);
        }
        
    }
    
    listCompleted(arrTask){

        let dataTask = arrTask;
        for(let a = 0; a < dataTask.length; a++){
            if(dataTask[a].completed){
                console.log(`${dataTask[a].id}. [x] ${dataTask[a].task} `);
            }
        }
        
    }


    delete(data){
        console.log(`Deleted ${data} from your to do List `);
    }

    foundId(arrTask, foundId){
        let dataTask = arrTask;
        let fId = foundId;
        for(let a = 0; a < dataTask.length; a++){
            if(dataTask[a].id == fId){
                console.log(`${dataTask[a].id}. ${dataTask[a].task} `);
            }
        }
    }

    viewFilterTag(arrData){
        let dataTask = arrData;
        for(let a = 0; a < dataTask.length; a++){
            let check = ''
            if(dataTask[a].completed){
                check = 'x'
            }
           console.log(`${dataTask[a].id}. ${dataTask[a].task} [${dataTask[a].tag}] `);
        }
    }

}



var view = new View;

module.exports = view;

