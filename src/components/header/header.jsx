import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => (
    <header className={styles.header} >
            {
                onLogout && (
                    <button className={styles.logout} onClick={onLogout}>Logout</button>
                )
            }
        <input type="image" img className={styles.logo} src="/images/logo.png" alt="logo image" />
        <h1>STARBUCKS Online Ordering App</h1>
    </header >
)
export default Header;