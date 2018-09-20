const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type:String,
    required: [true, "I Cant create a record without a title :( "]
  },
  years: {
    type: Number,
    required: [true, "Years information required"]
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company', // remeber that has to be as it is referenced in the mongoose.model in file Company.js
    required: true
  }
});

module.exports = mongoose.model('Job', Schema);
