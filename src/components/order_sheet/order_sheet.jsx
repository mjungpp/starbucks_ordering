import React from 'react';
import styles from './order_sheet.module.css';

const OrderSheet = ({meuns}) => {
    return (
        <section className={styles.sheet}>
            <h1 className={styles.title}>Order</h1>
            <form className={styles.form}>
                <div className={styles.container}>
                    <img className={styles.image} src="/images/menu/no-images.jpg" alt="" />
                    <p className={styles.option}>필수 선택 항목</p>
                    <select className={styles.select} name="menu" id="menu-select">
                        <option value="">메뉴를 선택해주세요.</option>
                        <option value="espresso">에스프레소</option>
                        <option value="americano">아메리카노</option>
                        <option value="coffee-latte">카페라떼</option>
                        <option value="cappuccino">카푸치노</option>
                        <option value="caramel-macchiato">카라멜 마끼야또</option>
                        <option value="mocha-frappuccino">모카 프라푸치노</option>
                        <option value="java-chip-frappuccino">자바칩 프라푸치노</option>
                        <option value="mango-banana-blended">망고 바나나 블렌디드</option>
                        <option value="cool-lime-fizzio">쿨라임 피지오</option>
                        <option value="green-tea">제주 유기 녹차</option>
                        <option value="mint-blend-tea">민트 블렌디드티</option>
                    </select>
                    <select className={styles.select} name="size" id="size-select">
                        <option value="">사이즈를 선택해주세요.</option>
                        <option value="tall">톨</option>
                        <option value="grande">그란데</option>
                        <option value="venti">벤티</option>
                    </select>
                    <select className={styles.select} name="drink-temperature" id="drink-temperature-select">
                        <option value="">HOT / ICE 를 선택해주세요.</option>
                        <option value="ice">차가운</option>
                        <option value="hot">따뜻한</option>
                    </select>
                    <select className={styles.select} name="cup" id="cup-select">
                        <option value="">컵을 선택해주세요.</option>
                        <option value="ice">매장컵</option>
                        <option value="hot">개인컵</option>
                        <option value="hot">일회용컵</option>
                    </select>
                    <p className={styles.option}>Personal Option</p>
                    <ul>
                        <li>커피</li>
                        <li>시럽</li>
                        <li>얼음</li>
                    </ul>
                    <div className={styles.preview}>
                        <p className={styles.price}>가격</p>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default OrderSheet;