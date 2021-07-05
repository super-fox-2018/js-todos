const Controller = require("./controller")

const argv = process.argv
let userAction = argv[2];
let tagName = "";

if(argv[2] !== undefined){
  if(argv[2].indexOf("filter") !== -1){
    tagName = argv[2].split(":")[1];
    userAction = "filter";
  }
}


switch (userAction) {
  case 'help':{
    Controller.help();
    break;
  }
  case 'list':{
      Controller.list();
      break;
    }
  case 'add':{
    let taskname = argv[3];
    Controller.add(taskname);
    break;
  }
  case 'delete':{
    let id = argv[3];
    Controller.delete(id);
    break;
  };
  case 'findById':{
    let id = argv[3];
    Controller.find(id);
    break;
  };
  case 'complete':{
    let id = argv[3];
    Controller.complete(id);
    break;
  };
  case 'uncomplete':{
    let id = argv[3];
    Controller.uncomplete(id);
    break;
  };
  case 'list:created':{
    let sortOrder = argv[3];
    Controller.sortCreated(sortOrder);
    break;
  }
  case 'list:outstanding':{
    let sortOrder = argv[3];
    Controller.sortOutstanding(sortOrder);
    break;
  }
  case 'list:completed':{
    let sortOrder = argv[3];
    Controller.sortComplete(sortOrder);
    break;
  }
  case 'tag':{
    let id = argv[3];
    let x = 4;
    let arr = [];
    while(argv[x]!== undefined){
      let tag = argv[x]
      arr.push(tag);
      x++;
    }
    Controller.tag(id, arr);
    break;
  }
  case 'filter':{
    Controller.filter(tagName);
    break;
  }
  default:{
    Controller.help();
    break;
  }

}



