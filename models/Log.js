const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  vehicleNumber: {
    type: String,
    required: true
  },
  driverName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  startKM: {
    type: Number,
    required: true
  },
  endKM: {
    type: Number,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  fuelUsed: {
    type: Number,
    required: true
  },
  purpose: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Log', logSchema);