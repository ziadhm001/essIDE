const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stateSchema = new Schema({
  codeStart: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('State', stateSchema)