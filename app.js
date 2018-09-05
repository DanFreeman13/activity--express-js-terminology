const express = require('express')
const chalk = require('chalk');
const logger = require('morgan');

const app = express();
const indexFile = `${ __dirname }/index.html`;
const PORT = process.env.PORT || 3000;

// Middleware
app.use(logger('tiny'));

//Route
app.get('', (request, response) => {
  response.sendFile(indexFile);
})

app.get('/muktek', (request, response) => {
  response.send("MUKTEK");
})

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
  res.status(500)
  .send('Internal Server Error!');
});


app.listen(PORT, () => {
  const formatedMessage = chalk.green(`Express server running on PORT: ${PORT}`);

  console.log(formatedMessage);
});
