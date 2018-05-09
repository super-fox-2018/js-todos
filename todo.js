const Controller = require('./controllers/mainController');
const Todo = require('./models/Todo');

Controller.processInput(process.argv);