const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type:String,
    required: [true, "Cant create a record without a title"]
  },
  years: {
    type: Number,
    required: [true, "Dont play with me fool"]
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  }
});

module.exports = mongoose.model('Job', Schema);
