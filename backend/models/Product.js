const mongoose = require('mongoose');

// Создаем схему для товара
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,  // Обеспечивает уникальность названия товара
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,  // Цена должна быть положительным числом
  },
  stock: {
    type: Number,
    required: true,
    min: 0,  // Количество товара должно быть положительным числом
  },
  imageUrl: {
    type: String,
    match: /^https?:\/\/\S+\.\S+/,  // Валидация для URL (если используется изображение)
  },
  category: {
    type: String,
    required: true,
    enum: ['ноутбуки', 'смартфоны', 'часы', 'наушники'], // Ограничение на список категорий
  }
}, { timestamps: true }); // Автоматически добавляет поля createdAt и updatedAt

// Создаем модель на основе схемы
module.exports = mongoose.model('Product', productSchema);
