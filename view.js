class View {
  displayTaskList(taskList) {
    for (let i = 0; i < taskList.length; i++) {
      let task = taskList[i];
      let id = task.id;
      let taskName = task.task;
      let status = ' ';
      let createdAt = task.createdAt;
      let completedAt = task.completedAt;
      let tags = task.tags.join(', ');
      if (task.status === 'completed') {
        status = 'x';
      }
      console.log(`${id}. [${status}] ${taskName} [${tags}] (created at: ${createdAt}, completed at: ${completedAt})`);
    }
  }

  displayTask(task) {
    console.log(task);
  }

  displayCommands(commandList) {
    for (let i = 0; i < commandList.length; i++) {
      let command = commandList[i];
      console.log(`node todo.js ${command.command} ${command.input}`);
    }
  }
}

module.exports = View;
