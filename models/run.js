const mongoose = require('mongoose');

const { Schema } = mongoose;

const RunSchema = new Schema({
  distance: Number,
  minutes: Number,
  seconds: Number,
  created: { type: Date, default: Date.now },
});

const Run = mongoose.model('Run', RunSchema);

module.exports = Run;