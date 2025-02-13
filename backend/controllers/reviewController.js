// /backend/controllers/reviewController.js

const Review = require('../models/Review');
const Product = require('../models/Product');

// Добавление нового отзыва
exports.addReview = async (req, res) => {
  const { product, rating, comment } = req.body;
  try {
    // Проверка, существует ли товар
    const foundProduct = await Product.findById(product);
    if (!foundProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const review = new Review({
      user: req.user.userId,
      product,
      rating,
      comment,
    });

    await review.save();
    res.status(201).json({ message: 'Review added successfully', review });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Получение отзывов для товара
exports.getReviews = async (req, res) => {
  const { productId } = req.params;
  try {
    const reviews = await Review.find({ product: productId }).populate('user', 'username');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
