const companies = require('../../companies.json');

const Controller = {
  index: (request, response) => {
    response
    .status(200)
    .json({
      data: companies
    });
  }
};

module.exports = Controller;
