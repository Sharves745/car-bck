const Log = require('../models/Log');

const addLog = async (req, res) => {
  try {
    const logData = { ...req.body };
    logData.distance = logData.endKM - logData.startKM;
    
    const log = new Log(logData);
    await log.save();
    res.status(201).json(log);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getLogs = async (req, res) => {
  try {
    const logs = await Log.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addLog,
  getLogs
};