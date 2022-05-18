import React from 'react';
import styles from './footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <p className={styles.title}>ⓒ 2022 <a className={styles.copyright} href="https://github.com/mjungpp">mjungpp</a> All Rights Reserved.</p>
    </footer>
)

export default Footer;