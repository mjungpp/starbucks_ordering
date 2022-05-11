import React from 'react';
import Menu from '../menu/menu';
import styles from './preview.module.css';

const Preview = ({ menus }) => {
    return (
        <section className={styles.preview}>
            <h1 className={styles.title}>Preview</h1>
            <ul className={styles.cards}>
            {
                menus.map(menu => (<Menu key={menu.id} menu={menu} />))
            }
            </ul>
        </section>
    )
}

export default Preview;