const { Router } = require('express');

const app = Router();

const Companies = require('../controllers/Companies.js');
const Jobs = require('../controllers/Jobs.js')

// COMPANIES
app.get('/companies', Companies.index);
app.get('/companies/:companyId', Companies.getById);
app.post('/companies', Companies.create);
app.put('/companies', (request, response) => {});

app.delete('/companies/:companyId', Companies.removeCompany);

// JOBS

app.get('/jobs', Jobs.index);
app.get('/jobs/:jobId', Jobs.getById);
app.post('/jobs', Jobs.create);
app.put('/jobs', (request, response) => {});

app.delete('/jobs/:jobId', Jobs.removeJob);

module.exports = app;
