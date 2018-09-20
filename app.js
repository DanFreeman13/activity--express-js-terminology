require('dotenv').config()
//Import Modules
const chalk = require('chalk');
const express = require('express')
const logger = require('morgan');
const mongoose = require('mongoose');
//Import all the routes configuration
const api = require('./src/routes/api.js');

// call for Express and localHost Port
const app = express();
// const indexFile = `${ __dirname }/index.html`;
const PORT = process.env.PORT || 3000;

//configure MongoDb
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});
mongoose.connection.on('connected', () => {
  console.log('MongoDB Successfuly runing on mongodb://localhost:27017/restApi')
});

// Middleware
app.use(logger('dev'));

//configure static files
app.set('views', './src/views');
app.set('view engine', 'pug');
app.set('json spaces', 2);

app.use('/static', express.static('Public'));

//Parse Body request
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//Route
app.get('/', (request, response) => {
  response.render('main', {
    pageTitle: 'LinkedIn REST API',
    subtitle: 'API Reference'
  });
});

//CORS

app.use((request, response, next) => {
  response.header('Acces-Control-Allow-Origin','*');
  response.header(
    'Acces-Control-Allow-Headers',
    'Origin, X-Requested-Width, Content-Type, Accept, Authorization'
  );
  response.header('The-Walt-Disney-Company','Mickey Mouse')

  next();
});

//Warranties that the user will have get, post, put and delete options, if so it will retrieve "OK"
app.options('*', (request, response, next) => {
  response.header(
    'Acces-Control-Allow-Methods',
    'GET, POST, PUT, DELETE'
  );
  response.send(200);

  next();
});

app.use('/api/v1/', api);

//404
app.use((request, response) => {
  const ERROR = {
    message: '404. Not Found.'
  };

  response
  .status(404)
  .json(ERROR);
});

// 500
app.use(function(error, request, response, next) {
  console.log(error.stack);
  response.status(500)
  .send('Internal Server Error!');
});


app.listen(PORT, () => {
  const formatedMessage = chalk.green(`Express server running on PORT: ${PORT}`);

  console.log(formatedMessage);
});
