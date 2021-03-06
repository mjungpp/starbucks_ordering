import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Order from './components/order/order';

function App({ authService, menuRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login authService={authService} />} />
          <Route path='/order' element={<Order authService={authService} menuRepository={menuRepository}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
