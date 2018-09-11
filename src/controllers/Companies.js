//Import JSON DATA from a local file
const companies = require('../../companies.json');
const mongoose = require('mongoose');
const Company = require('../models/Company');

/**
* Conpanies
*
*     `index()`
*     `getById()`
*/
const Controller = {
  index: (request, response) => {
    Company
      .find()
      .exec()
      .then(data => {
        response
        .json({
          companies: data
        })
        .status(200)
      });
  },
  getById: (request, response) => {
    /**
    * [1] Acces the `companyId` from URL through `request.params` object.
    * [2] Filter data and return if the companyId exists.
    */
    const { companyId } = request.params;

    // Logic

    response
      .json({
        data: Company
      })
      .status(200);
    },
    create: (request, response) => {
      const newCompany = new Company({
        _id: new mongoose.Types.ObjectId(),
        name: request.body.name
      });

      newCompany
        .save()
        .then(data => {
          response
          .json({
            data: newCompany
          })
          .status(201);
        })
        .catch(error => {
          response
            .json({
              message: error
            })
            .status(500)
        });
    },
    removeCompany: (request, response) => {
      response
      .json({
        type: 'DELETE'
      })
      .status(200);
    }
};

module.exports = Controller;
