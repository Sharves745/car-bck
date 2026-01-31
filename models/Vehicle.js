const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  vehicleNumber: {
    type: String,
    required: true,
    unique: true
  },
  model: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  ownerName: {
    type: String,
    required: false
  },
  driverName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);