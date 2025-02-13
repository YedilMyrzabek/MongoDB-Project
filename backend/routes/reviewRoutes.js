// /backend/routes/reviewRoutes.js

const express = require('express');
const { addReview, getReviews } = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, addReview); // Добавление отзыва
router.get('/:productId', getReviews); // Получение отзывов для товара

module.exports = router;
