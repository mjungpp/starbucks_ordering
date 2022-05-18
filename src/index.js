import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import AuthService from './service/auth-service';
import MenuRepository from './service/menu_repository';
const root = ReactDOM.createRoot(document.getElementById('root'));

const authService = new AuthService();
const menuRepository = new MenuRepository();
root.render(
  <React.StrictMode>
    <App authService={authService} menuRepository={menuRepository}/>
  </React.StrictMode>
);