class View{
	static test(){
		console.log('view')
	}


	static help(){
	console.log('$ node todo.js',)
    console.log('$ node todo.js help',)
    console.log('$ node todo.js list',)
    console.log('$ node todo.js add <task_content>')
    console.log('$ node todo.js findById <task_id>')
    console.log('$ node todo.js delete <task_id>')
    console.log('$ node todo.js complete <task_id>')
    console.log('$ node todo.js uncomplete <task_id>')
  }

  static list(list){
    for(var i=0;i<list.length;i++){
      console.log(`${list[i].id}: ${list[i].task} ${list[i].mark}`)
    }
  }
  static add(listAdded){
    console.log(`added ${listAdded} to your TODO list`)
  }
  static findById(dataShowed){
    console.log(`${dataShowed.id}: ${dataShowed.task}`)
  }
  static deleteById(dataShowed){
    //console.log(`${dataShowed.id}: ${dataShowed.task} deleted from your TODO list`)
    console.log(dataShowed)
  }

}
module.exports = View