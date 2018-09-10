const { Router } = require('express');

const app = Router();

const Companies = require('../controllers/Companies.js');

app.get('/companies', Companies.index);
app.get('/companies/:companyId', Companies.getById);
app.post('/companies', Companies.create);
app.put('/companies', (request, response) => {});

app.delete('/companies', (request, response) => {
  response
  .json({
    type: 'DELETE'
  })
  .status(200);
})

module.exports = app;
