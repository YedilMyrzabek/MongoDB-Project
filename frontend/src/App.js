import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('name');
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении товаров:', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(product => product._id !== productId));
  };

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    )
    .filter(product => 
      selectedCategory ? product.category === selectedCategory : true
    )
    .sort((a, b) => {
      if (sortOrder === 'price') {
        return a.price - b.price;
      }
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <img src="/logo.png" alt="Logo" className="logo" />
          <div className="navbar-links">
            <input 
              type="text" 
              className="search-bar" 
              placeholder="Поиск товаров..." 
              value={search}
              onChange={handleSearchChange}
            />
            <select 
              className="filter-category" 
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Все категории</option>
              <option value="smartphones">Смартфоны</option>
              <option value="laptops">Ноутбуки</option>
              <option value="watches">Часы</option>
              <option value="headphones">Наушники</option>
            </select>
            <select 
              className="sort-order" 
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="name">По имени</option>
              <option value="price">По цене</option>
            </select>

            {/* Корзина в хедере */}
            <div className="cart-icon" onClick={() => setCartVisible(!cartVisible)}>
              <span className="cart-count">{cart.length}</span> 🛒
            </div>
          </div>
        </nav>
        <h1>Товары, которые вас удивят!</h1>
        <p>Все для вашего комфорта и технологий</p>
      </header>

      {/* Отображение корзины */}
      {cartVisible && (
        <div className="cart-dropdown">
          <h2>Корзина</h2>
          {cart.length === 0 ? (
            <p>Ваша корзина пуста.</p>
          ) : (
            <div>
              {cart.map(item => (
                <div key={item._id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.price} ₸</p>
                    <button className="remove-btn" onClick={() => handleRemoveFromCart(item._id)}>Удалить</button>
                  </div>
                </div>
              ))}
              <div className="cart-total">
                <h3>Итого: {cart.reduce((total, item) => total + item.price, 0)} ₸</h3>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p className="product-price">Цена: {product.price} ₸</p>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Добавить в корзину</button>
            </div>
          </div>
        ))}
      </div>

      {/* Футер с контактной информацией */}
      <footer className="footer">
        <div className="footer-content">
          <h3>Контактная информация</h3>
          <p>Наш саппорт всегда готов помочь!</p>
          <p>Адрес: Алматы, ул. Примерная 123</p>
          <p>Телефон: +7 (777) 123-45-67</p>
          <p>Электронная почта: support@marketplace.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
