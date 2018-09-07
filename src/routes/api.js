const { Router } = require('express');

const app = Router();

const Companies = require('../controllers/Companies.js');

app.get('/companies', Companies.index);
app.get('/companies/:companyId', Companies.getById);

module.exports = app;
