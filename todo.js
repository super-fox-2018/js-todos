const Controller = require('./controllers/mainController');

function route(option, modifier, argumentList) {
  switch(option) {
    case 'add':
      Controller.handleAdd(argumentList[0]);
      break;
    case 'list':
      Controller.handleList(modifier, argumentList[0]);
      break;
    case 'findById':
      Controller.handleFindById(+argumentList[0]);
      break;
    case 'delete':
      Controller.handleDelete(+argumentList[0]);
      break;
    case 'complete':
      Controller.handleCompleteTodo(+argumentList[0]);
      break;
    case 'uncomplete' :
      Controller.handleUncompleteTodo(+argumentList[0]);
      break;
    case 'tag':
      Controller.handleTag(+argumentList[0], argumentList.slice(1));
      break;
    case 'untag':
      Controller.handleUntag(+argumentList[0], argumentList.slice(1));
      break;
    case 'filter':
      Controller.handleFilter(modifier);
      break;
    default:
    Controller.handleHelp();
  }
}

function processInput(input) {
  if (input[2]) {
    const option = input[2].split(':');
    const argumentList = [];
    for (let i = 3; i < input.length; i += 1) {
      argumentList.push(input[i]);
    }
    route(option[0], option[1], argumentList);
  } else {
    Controller.handleHelp();
  }
}

processInput(process.argv);