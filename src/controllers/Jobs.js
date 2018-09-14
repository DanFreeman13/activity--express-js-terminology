const mongoose = require('mongoose');
const Job = require ('../models/Job');

const Controller = {
  index: (request, response) => {
    Job
      .find()
      .populate('Company')
      .exec()
      .then(data => {
        if (data.length > 0) {
          response
            .status(200)
            .json({
              total: data.length,
              jobs: data
            })
        } else {
          response
            .status(404)
            .json({
              message: "No data in database"
            })
        };

      })
  },
  getById: (request, response) => {
    Job
      .findById(request.params.jobId)
      .exec()
      .then(job => {
        response
          .status(200)
          .json({
            data: Job
          });
      });
  },
  create: (request, response) => {
    const newJob = new Job({
      _id: new mongoose.Types.ObjectId(),
      title: request.body.title,
      years: request.body.years,
      company: request.body.companyId
    });

    newJob
      .save()
      .then(newRecord => {
        response
          .status(201)
          .json({
            data: newRecord
          });
      })
      .catch(error => {
        const errors = [
          {
            title: error.errors.title.message
          }, {
            years: error.errors.years.message
          }
        ];

        response
          .status(400)
          .json({
            errors
          });
      });
  },
  removeJob: (request, response) => {
    Job
      .findByIdAndDelete(request.params.jobId)
      .then(() => {
        response
          .sendStatus(204);
      });
    }
};

module.exports = Controller;
