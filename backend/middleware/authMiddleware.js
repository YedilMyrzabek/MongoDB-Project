const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Middleware для проверки токена
module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }
  
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);  // Проверка токена с секретным ключом
    req.user = decoded;  // Декодированные данные добавляются в req.user
    next();  // Даем доступ к следующему middleware или маршруту
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};
