const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  imageUrl: { type: String },  // Если нужно поле для изображения, можно оставить, иначе удалить
});

module.exports = mongoose.model('Product', productSchema);
