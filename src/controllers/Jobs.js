const Job = require ('../models/Job');
const mongoose = require('mongoose');

const Controller = {
  index: (request, response) => {
    Job
      .find()
      .exec()
      .then(data => {
        response
          .json({
            jobs: data
          })
          .status(200)
      });
  },
  getById: (request, response) => {
    const { jobId } = request.params;

    response
      .json({
        data: Job
      })
      .status(200)
  },
  create: (request, response) => {
    const newJob = new Job({
      _id: new mongoose.Types.ObjectId(),
      name: request.body.name
    });

    newJob
      .save()
      .then(data => {
        response
          .json({
            data: newJob
          })
          .status(201);
      })
      .catch(error => {
        response
          .json({
            message: error
          })
          .status(500);
      });
  },
  removeJob: (request, response) => {

    const { JobId } = request.params;
    console.log(request);
    Job
      .find({
        _id: JobId
      })
      .remove(data => {
        response
          .json({
            message: "Removed id successfuly"
          })
          .status(200);
      });
  }
};

module.exports = Controller;
