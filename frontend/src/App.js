import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginRegister from './components/LoginRegister'; // Подключаем LoginRegister компонент
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [token, setToken] = useState(''); // Стейт для хранения токена
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Стейт для отслеживания авторизации
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('name');

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true); // При наличии токена, пользователь считается авторизованным
    }
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении товаров:', error);
      });
  }, [token]); // Перезапуск при изменении токена

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      alert('Пожалуйста, войдите в систему, чтобы добавить товар в корзину.');
      setIsLoggedIn(false); // Перенаправляем на страницу логина
      return; // Прерывание добавления товара, если пользователь не авторизован
    }
    setCart([...cart, product]); // Добавление товара в корзину
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(product => product._id !== productId)); // Удаление товара из корзины
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setToken('');
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
            {/* Иконка выхода */}
            {isLoggedIn && (
              <div className="user-icon" onClick={handleLogout}>
                <span>🚪</span> Выйти
              </div>
            )}
            {/* Иконка корзины */}
            {isLoggedIn && (
              <div className="cart-icon" onClick={() => setCartVisible(!cartVisible)}>
                <span className="cart-count">{cart.length}</span> 🛒
              </div>
            )}
            {/* Поиск и фильтрация */}
            {isLoggedIn && (
              <div className="filters">
                <input
                  type="text"
                  placeholder="Поиск товаров..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Все категории</option>
                  <option value="smartphones">Смартфоны</option>
                  <option value="laptops">Ноутбуки</option>
                  <option value="watches">Часы</option>
                  <option value="headphones">Наушники</option>
                </select>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="name">По имени</option>
                  <option value="price">По цене</option>
                </select>
              </div>
            )}
          </div>
        </nav>
        <h1>Welcome to Our E-Commerce Platform</h1>
      </header>

      {/* Если пользователь не авторизован, показываем Login/Register компонент */}
      {!isLoggedIn ? (
        <LoginRegister setToken={setToken} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          {/* Отображение товаров */}
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
        </>
      )}

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
};

export default App;
