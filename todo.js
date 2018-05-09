const Controller = require('./controllers/mainController');
const Todo = require('./models/Todo');

const option = process.argv[2] || null;
const argument = process.argv[3] || null;

Controller.route(option, argument);