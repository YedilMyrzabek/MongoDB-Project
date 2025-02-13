// /src/pages/LoginPage.js

import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  const handleLogin = (token) => {
    // Обработчик после успешного логина
    console.log('Logged in with token:', token);
  };

  return (
    <div>
      <h2>Login</h2>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
