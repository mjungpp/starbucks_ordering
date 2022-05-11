import React, { useEffect, useState } from 'react';
import styles from './order.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import OrderSheet from '../order_sheet/order_sheet';
import Preview from '../preview/preview';
import { useNavigate } from 'react-router-dom';

const Order = ({ authService }) => {
    const [ menus, setMenus ] = useState([
        {
            id : '1',
            item : 'americano',
            drink_temperature : 'ice',
            size : 'venti',
            cup : 'disposable',
            personal_option : {
                shot : '1',
                syrup : '',
                syrup_pump : '',
                ice : 'extra'
            },
            price : 5500
        },
        {
            id : '2',
            item : 'coffee-latte',
            drink_temperature : 'hot',
            size : 'tall',
            cup : 'shop',
            personal_option : {
                shot : '',
                syrup : 'vanila',
                syrup_pump : '2',
                ice : ''
            },
            price : 5500,
        },
        {
            id : '3',
            item : 'java-chip-frappuccino',
            drink_temperature : 'ice',
            size : 'grande',
            cup : 'personal',
            personal_option : {
                shot : '',
                syrup : 'chocolate',
                syrup_pump : '3',
                ice : 'less'
            },
            price : 7300,
        }
    ]);
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
                <OrderSheet menus={menus} />
                <Preview menus={menus} />
            </div>
            <Footer />
        </section>
    )
}

export default Order;
