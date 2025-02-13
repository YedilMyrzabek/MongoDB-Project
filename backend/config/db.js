// /backend/config/db.js

const mongoose = require('mongoose');
const config = require('./config');

// Функция для подключения к базе данных
const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Завершить процесс с ошибкой
  }
};

module.exports = connectDB;  // Экспортируем функцию connectDB
