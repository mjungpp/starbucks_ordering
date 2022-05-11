import React, { useEffect } from 'react';
import styles from './menu.module.css';

const Menu = ({menu}) =>{
    const { item, drink_temperature, size, cup, personal_option, price} = menu; 
    const { shot, syrup, syrup_pump, ice } = personal_option;

    const setImages = (item) => {
        let file_path = item && `images/menu/${item}.jpg`;
        return file_path;
    }

    useEffect(() => {
        console.log(Object.keys(menu));
    }, [menu])

    return (
            <li className={styles.card}>
                <img className={styles.img} src={setImages(item)} alt="menu photo" />
                <div className={styles.item}>
                    <h1 className={styles.menu}>{item}</h1>
                    <p className={styles.temperature}>{drink_temperature}</p>
                    <p className={styles.size}>{size}</p>
                    <p className={styles.cup}>{cup}</p>
                    <p className={styles.shot}>{shot}</p>
                    <p className={styles.syrup}>{syrup}</p>
                    <p className={styles.pump}>{syrup_pump}</p>
                    <p className={styles.ice}>{ice}</p>
                    <p className={styles.price}>{price}</p>
                </div>
            </li>
    )
}

export default Menu;