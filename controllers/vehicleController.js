const Vehicle = require('../models/Vehicle');

const addVehicle = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json({ message: 'Vehicle created successfully', vehicle });
  } catch (error) {
    console.error('Vehicle creation error:', error);
    res.status(400).json({ error: error.message });
  }
};

const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find().sort({ createdAt: -1 });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addVehicle,
  getVehicles
};