const { Router } = require('express');

const app = Router();

const Companies = require('../controllers/companies.js')

app.get('/companies', Companies.index);

module.exports = app;

  /*
  * BASE: http://localhost:3000
  * API VERSION: /api/v1/
  * RESOURCE: /companies
  */
