// /backend/controllers/orderController.js

const Order = require('../models/Order');
const Product = require('../models/Product');

// Создание нового заказа
exports.createOrder = async (req, res) => {
  const { products } = req.body;
  try {
    // Проверка наличия товара на складе
    let totalAmount = 0;
    for (let item of products) {
      const product = await Product.findById(item.product);
      if (!product || product.stock < item.quantity) {
        return res.status(400).json({ message: `Not enough stock for ${product.name}` });
      }
      totalAmount += product.price * item.quantity;
    }

    // Создание заказа
    const order = new Order({
      user: req.user.userId,
      products,
      totalAmount,
    });

    // Обновление запасов товаров
    for (let item of products) {
      const product = await Product.findById(item.product);
      product.stock -= item.quantity;
      await product.save();
    }

    await order.save();
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Обновление статуса заказа
exports.updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body;
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    await order.save();
    res.status(200).json({ message: 'Order status updated', order });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
