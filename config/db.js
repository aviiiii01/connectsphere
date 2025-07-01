const mongoose = require('mongoose');

const db = process.env.MONGO_URI; // ✅ Use env variable from Render

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongo DB is connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit on failure
  }
};

module.exports = connectDB;
