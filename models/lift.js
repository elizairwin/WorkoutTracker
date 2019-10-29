const mongoose = require('mongoose');

const { Schema } = mongoose;

const LiftSchema = new Schema({
  weight: String,
  reps: Number,
  minutes: Number,
  seconds: Number,
  created: { type: Date, default: Date.now },
});

const Lift = mongoose.model('Lift', LiftSchema);

module.exports = Lift;