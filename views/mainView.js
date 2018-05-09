class View {
  static showHelp(options) {
    console.log('Usage: node [filename].js [options] [ task_id | task_content | ]\n');
    console.log('Options : \n');
    for (let i = 0; i < options.length; i += 1) {
      const option = options[i];
      console.log('\x1b[36m%s\x1b[0m', `  ${option.name}`, `-- ${option.purpose}`);
    }
  }

  static showList(todos) {
    for (let i = 0; i < todos.length; i += 1) {
      const todo = todos[i];
      console.log(`${i+1}. [${todo.status ? 'X' : ' '}] ${todo.task} (id:${todo.id})`);
    }
  }

  static showOne(todo) {
    console.log(`Id : ${todo.id}`);
    console.log(`Task : ${todo.task}`);
    console.log(`Status : ${todo.status ? 'Completed' : 'Uncompleted' }`);
    console.log(`Created At : ${todo.createdAt}`);
  }

  static showMessage(message) {
    console.log(message);
  }
}

module.exports = View;