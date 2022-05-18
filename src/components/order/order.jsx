import React, { useEffect, useState } from 'react';
import styles from './order.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import OrderSheet from '../order_sheet/order_sheet';
import Preview from '../preview/preview';
import { useLocation, useNavigate } from 'react-router-dom';

const Order = ({ authService, menuRepository }) => {

    const navigateState = useLocation().state;
    const [ menus, setMenus ] = useState({});
    const [ userId, setUserId ] = useState(navigateState && navigateState.id);
    const history = useNavigate();

    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = menuRepository.syncMenus(userId, menus => {
            setMenus(menus);
        })
        return () => stopSync();
    }, [userId, menuRepository]);

    useEffect(() => {
        authService.onAuthChange(user=> {
            if(user){
                setUserId(user.uid);
            }else {
                history("/");
            }
        })
    })

    const addMenu = menu => {

        setMenus(menus => {
            const updated = { ...menus };
            updated[menu.id] = menu;
            return updated;
        });
        menuRepository.saveMenu(userId, menu);
    }

    return (
        <section className={styles.order}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <OrderSheet onAdd={addMenu} />
                <Preview menus={menus} />
            </div>
            <Footer />
        </section>
    )
}

export default Order;
