import React from 'react';
import Menu from '../menu/menu';
import styles from './preview.module.css';

const Preview = ({ menus }) => {
    return (
        <section className={styles.preview}>
            <h1 className={styles.title}>미리보기</h1>
            <ul className={styles.cards}>
            {
                    Object.keys(menus).map(key =>
                        <Menu key={key} menu={menus[key]} />
                    )
            }
            </ul>
        </section>
    )
}

export default Preview;