const { Router } = require('express');

const app = Router();

const Companies = require('../controllers/Companies.js');
// const Jobs = require('../controllers/Jobs.js')
const Users = require('../controllers/Users.js')

// COMPANIES
app.get('/companies', Companies.index);
app.post('/companies', Companies.create);

app.get('/companies/:companyId', Companies.getById);
app.delete('/companies/:companyId', Companies.removeCompany);
app.put('/companies', Companies.updateById);

// USER
app.post('/auth/signup', Users.create);

// JOBS

// app.get('/jobs', Jobs.index);
// app.get('/jobs/:jobId', Jobs.getById);
// app.post('/jobs', Jobs.create);
// app.delete('/jobs/:jobId', Jobs.removeJob);


module.exports = app;
