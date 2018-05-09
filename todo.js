const argv = process.argv;
const View = require('./view/view.js')

// console.log(argv)
let view = View.display(argv);
return view