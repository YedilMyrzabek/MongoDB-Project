// /backend/routes/orderRoutes.js

const express = require('express');
const { createOrder, updateOrderStatus } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createOrder); // Создание заказа
router.put('/status', authMiddleware, updateOrderStatus); // Обновление статуса заказа

module.exports = router;
