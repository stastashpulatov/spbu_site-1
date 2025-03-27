import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.scss';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Проверяем, авторизован ли пользователь
    const token = localStorage.getItem('adminToken');
    if (token) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // В реальном приложении здесь должна быть проверка через API
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('adminToken', 'temp-token');
      navigate('/admin/dashboard');
    } else {
      setAttempts(prev => prev + 1);
      setError(
        attempts >= 2
          ? 'Слишком много попыток. Логин: admin, Пароль: admin'
          : 'Неверный логин или пароль. Попробуйте еще раз.'
      );
    }
  };

  return (
    <div className="admin-login">
      <div className="login-container">
        <h1>Вход в панель администратора</h1>
        
        <div className="login-info">
          <p>Для доступа к панели администратора необходима авторизация.</p>
          <p>Используйте свои учетные данные для входа.</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Имя пользователя</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите имя пользователя"
              required
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="login-button">
            Войти в систему
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
