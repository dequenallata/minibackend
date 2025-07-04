const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB conexión establecida');
  } catch (err) {
    console.error('DB conexión error', err);
    process.exit(1);
  }
};

module.exports = connectDB;
