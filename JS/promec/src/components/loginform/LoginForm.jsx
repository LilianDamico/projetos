import React, { useState } from 'react';
import './LoginForm.css'

const LoginForm = () => {
  // Estados para armazenar os valores dos campos de entrada
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log('Username:', username);
    console.log('Password:', password);
    // Limpar os campos após o envio
    setUsername('');
    setPassword('');
  };

  return (
    <div className='frame1'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
