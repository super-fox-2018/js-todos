const argv = process.argv;
let task = argv[2];
let input = argv[3];
const Controller = require('./controller');

let todo = new Controller();

if (task === 'help') {
  todo.help();
}

if (task.split(':')[0] === 'list') {
  status = task.split(':')[1];
  todo.list(status, input); // asc/desc
}

if (task === 'add') {
  todo.add(input);
}

if (task === 'findById') {
  todo.findById(Number(input));
}

if (task === 'delete') {
  todo.delete(Number(input));
}

if (task === 'complete') {
  todo.complete(Number(input));
}

if (task === 'uncomplete') {
  todo.uncomplete(Number(input));
}

if (task === 'tag') {
  let id = input;
  let tags = [];
  for (let i = 4; i < argv.length; i++) {
    tags.push(argv[i]);
  }
  todo.addTags(id, tags);
}

if (task.split(':')[0] === 'filter') {
  tag = task.split(':')[1];
  todo.filterByTag(tags);
}

