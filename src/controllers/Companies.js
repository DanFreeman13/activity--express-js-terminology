//Import JSON DATA from a local file
// const companies = require('../../companies.json');
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
          .status(200)
          .json({
            total: data.length,
            companies: data
          })
      });
  },
  getById: (request, response) => {
    /**
    * [1] Acces the `companyId` from URL through `request.params` object.
    * [2] Filter data and return if the companyId exists.
    */
    const { companyId } = request.params;

    // Logic
    Company
      .findById({
        _id: companyId
      })
      .exec()
      .then(data => {
        if (data === null) {
          response
            .status(404)
            .json({
              message: `Company not found with provided id ${ companyId }.`,
              status: '404'
            })
        } else {
          reponse
            .status(200)
            .json({
              errors: data,
              status: '200'
            });
          }
      })
      .catch(error => {
        console.log(error);
        response
          .status(400)
          .json({
            message: error.message,
            status: '400'
          });
      })
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
          .status(201)
          .json({
            data: newCompany
          });
        })
        .catch(error => {
          response
          .status(500)
            .json({
              message: error
            });
        });
    },
    removeCompany: (request, response) => {

      const { companyId } = request.params;
      Company
        .findByIdAndDelete({
          _id: companyId
        })
        .exec()
        .then(() => {
          response.sendStatus(204);
        });
    },
    updateById: (request, response) => {
      Company
        .findOneAndUpdate({
          id_: request.params.companyId
        }, {
          name: request.body.name
        })
        .exec()
        .then(data => {
          response
            .status(200)
            .json({
              message: "Updated Post"
            });
        });
    }
};

module.exports = Controller;
