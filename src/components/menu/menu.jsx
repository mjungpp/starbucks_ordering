import React from 'react';
import styles from './menu.module.css';
import ConvertService from '../../service/convert-service.js';

const convertService = new ConvertService();
const Menu = ({ menu }) =>{
    const { item, order_date, drink_temperature, size, cup, price, shot, syrup, syrup_count, ice} = menu; 
    
    const setImages = (item) => {
        let file_path = item && `images/menu/${item}.jpg`;
        return file_path;
    }

    return (
            <li className={styles.card}>
                <input type="image" img className={styles.img} src={setImages(item)} alt="menu photo" />
                <div className={styles.item}>
                    <p className={styles.date}>주문일 : {order_date}</p>
                    <h1 className={styles.menu}>{convertService.convertValMenu(item)}</h1>
                    <p className={styles.temperature}>온도 : {convertService.convertValTemp(drink_temperature)}</p>
                    <p className={styles.size}>사이즈 : {convertService.convertValSize(size)}</p>
                    <p className={styles.cup}>컵 : {convertService.convertValCup(cup)}</p>
                    {
                        shot && <p className={styles.shot}>샷 추가 : {shot}</p>
                    }
                    {
                        syrup !== 0 && <p className={styles.syrup}>시럽 추가 : {convertService.convertValSyrup(syrup)} </p>
                    }
                    {
                        syrup_count && <p className={styles.pump}>시럽 추가 펌프 : {syrup_count}</p>
                    }
                    <p className={styles.ice}>얼음 : {convertService.convertValIce(ice)}</p>
                    <p className={styles.price}>가격 : {price}</p>
                </div>
            </li>
    )
}

export default Menu;