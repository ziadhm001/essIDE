const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recordSchema = new Schema({
  action: {
    type: String,
    required: true
  },
  lines: {
    type: Array,
    required: true
  },
  start: {
    type: Object,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Record', recordSchema)