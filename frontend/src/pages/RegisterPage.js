// /src/pages/RegisterPage.js

import React from 'react';
import Register from '../components/Register';

const RegisterPage = () => {
  const handleRegister = (token) => {
    // Обработчик после успешной регистрации
    console.log('Registered with token:', token);
  };

  return (
    <div>
      <h2>Register</h2>
      <Register onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
