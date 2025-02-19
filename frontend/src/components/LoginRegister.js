// src/components/LoginRegister.js
import React, { useState } from 'react';
import './LoginRegister.css';  // Импортируем CSS файл

const LoginRegister = ({ setToken, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true); // Переключение между регистрацией и логином
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    setIsLoading(false);
    setMessage(data.message);
    if (data.token) {
      setToken(data.token);
      setIsLoggedIn(true); // Меняем статус на авторизованный
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    setIsLoading(false);
    setMessage(data.message);
    if (data.token) {
      setToken(data.token);
      setIsLoggedIn(true); // Меняем статус на авторизованный
    }
  };

  return (
    <div className="login-register">
      <h2>{isRegistering ? 'Sign Up' : 'Log In'}</h2>
      {isRegistering ? (
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging In...' : 'Log In'}
          </button>
        </form>
      )}

      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering
          ? 'Already have an account? Log In'
          : "Don't have an account? Sign Up"}
      </button>

      {message && <div>{message}</div>}
    </div>
  );
};

export default LoginRegister;
