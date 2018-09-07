const companies = require('../../companies.json');

const Controller = {
  index: (request, response) => {
    response
    .status(200)
    .json({
      companies
    });
  },
  getById: (request, response) => {

    const theCompany = companies.data.filter(company => {
      return company.id === parseInt(request.params.companyId);
    });

    if (theCompany.length) {
      response
      .json({
        data: theCompany[0]
      })
      status(200);
    } else {
      response
      .json({
        message: 'Not Company Found'
      })
    }
  }
};

module.exports = Controller;
