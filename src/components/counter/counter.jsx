import React from 'react';
import styles from './counter.module.css';

const Counter = () =>{

    const handleIncrement = () => {
        this.props.onIncrement(this.props.count);
    }

    const handleDecrement = () => {
        this.props.onIncrement(this.props.count);

    }

    const handleReset = () => {
        this.props.onReset(this.props.count);
    }

    return (
        <div className={styles.counter}>
                <p>0</p>
                <button className={styles.button} onClick={handleIncrement}>+1</button>
                <button className={styles.button} onClick={handleDecrement}>-1</button>
                <button className={styles.button} onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter;