// /backend/controllers/userController.js

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Регистрация нового пользователя
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();

    // Генерация токена
    const token = jwt.sign({ userId: user._id }, config.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({
      message: 'User registered successfully',
      token: token,  // Отправляем токен клиенту
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Аутентификация пользователя (вход)
exports.authUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Генерация токена
    const token = jwt.sign({ userId: user._id }, config.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({
      message: 'Login successful',
      token: token,  // Отправляем токен клиенту
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};