const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const User = require ('../models/User.js')

const Controller = {
  create: (request, response) => {
    bcrypt.hash(request.body.password, 10, (error, hash) => {
      if (error) {
        return response
          .status(500)
          .json({
            message: error
          });
      }

      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        email: request.body.email,
        password: hash
    });

    newUser
      .save()
      .then(saved => {
        response
          .status(201)
          .json({
            saved
          });
      });
  });
  }
};

module.exports = Controller;
