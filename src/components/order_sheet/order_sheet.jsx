import React from 'react';
import MenuOrderForm from '../menu_order_form/menu_order_form';
import styles from './order_sheet.module.css';

const OrderSheet = ({meuns}) => {
    return (
        <section className={styles.sheet}>
            <h1 className={styles.title}>Order</h1>
        </section>
    )
}

export default OrderSheet;