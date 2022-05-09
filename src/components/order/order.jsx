import React, { useEffect } from 'react';
import styles from './order.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';

const Order = ({ authService }) => {
    const history = useNavigate();

    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user=> {
            if(!user){
                history("/");
            }
        })
    })

    return (
        <section className={styles.order}>
            <Header onLogout={onLogout} />
            <Footer />
        </section>
    )
}

export default Order;
