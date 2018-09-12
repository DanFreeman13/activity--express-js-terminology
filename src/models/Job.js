const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: mongoose.Schema.Types.String,

});

module.exports = mongoose.model('Job', Schema)
