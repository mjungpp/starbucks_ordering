import React, { useEffect } from 'react';
import styles from './order.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import OrderSheet from '../order_sheet/order_sheet';
import Preview from '../preview/preview';
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
            <div className={styles.container}>
                <OrderSheet />
                <Preview />
            </div>
            <Footer />
        </section>
    )
}

export default Order;
