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
      .find({
        _id: companyId
      })
      .exec()
      .then(data => {
        if (data === null) {
          response
            .status(404)
            .json({
              message: `Company not found with provided id ${ companyId }`
            });
        } else {
          response
            .status(200)
            .json({
              company: data
            });
        }

      })
      .catch(error => {
        response
          .status(500)
          .json({
            message: error.message
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
        .findById({
          _id: companyId
        })
        .remove(data => {
          response
            .json({
              message: "Removed company id successfuly"
            })
            .status(200);
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
