const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  hiringDate: Date,
  salary: Number,
  location : String,
  contactEmail: String,
  isStillAvailable: Boolean

});

module.exports = mongoose.model('Company', Schema);
