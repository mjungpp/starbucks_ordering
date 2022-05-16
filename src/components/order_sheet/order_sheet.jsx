import React, { useEffect, useRef, useState } from 'react';
import styles from './order_sheet.module.css';
import CalculateService from '../../service/calculate-price';


const calculateService = new CalculateService();
const OrderSheet = ({ onAdd }) => {
    const formRef = useRef();
    const menuRef = useRef();
    const sizeRef = useRef();
    const tempRef = useRef();
    const cupRef = useRef();
    const iceRef = useRef();
    const [shot, setShot] = useState(0);
    const syrupRef = useRef();
    const [syrup, setSyrup] = useState(0);
    const [image, setImage] = useState('/images/menu/no-images.jpg');
    const [price, setPrice] = useState(0);

    const onSubmit = event => {
        event.preventDefault();
        const menu = {
            id : Date.now(),
            order_date : getToday(),
            item : menuRef.current.value || popupWithAlert('음료'),
            drink_temperature : tempRef.current.value || popupWithAlert('온도'),
            size : sizeRef.current.value || popupWithAlert('음료 사이즈'),
            cup : cupRef.current.value || popupWithAlert('컵 사이즈'),
            personal_option : {
                shot : shot != 0 ? shot : '',
                syrup : syrupRef.current.value || '' & setSyrup(0),
                syrup_count : syrup != 0 ? syrup : '',
                ice : iceRef.current.value || ''
            },
            price : setTotalPrice(menuRef.current.value, sizeRef.current.value, shot, syrupRef.current.value, syrup),
        }
        formRef.current.reset();
        onAdd(menu);
    }

    const setTotalPrice = (menu, size, shot, syrup_pump, syrup_count) => {
        const menuPrice = calculateService.calculateMenuPrice(menu);

    }

    const popupWithAlert = (log) => {
        alert(`${log}를 선택해주세요.`);
    }

    const getToday = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = ("0" + (1 + date.getMonth())).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        const today =`${year}-${month}-${day}`;
        return today;
    }

    const onCancle = event => {
        event.preventDefault();
        formRef.current.reset();
    }

    const addCount = (event) => {
        event.preventDefault();
        event.target.dataset.index == 'shot-add' ? setShot(shot + 1) : setSyrup(syrup + 1);
    }

    const subtractCount = (event) => {
       event.preventDefault();
       let count = 0;
       event.target.dataset.index == 'shot-sub' ? count = shot - 1 :  count = syrup - 1
       count = count < 0 ? 0 : count;
       event.target.dataset.index == 'shot-sub' ? setShot(count) : setSyrup(count);

    }

    const resetCount = (event) => {
        event.preventDefault();
        event.target.dataset.index == 'shot-reset' ? setShot(0) : setSyrup(0);
    }

    const setMenuImages = event => {
        event.target.value != '' ? setImage(`/images/menu/${event.target.value}.jpg`) : setImage(`/images/menu/no-images.jpg`);
    }

    return (
        <section className={styles.sheet}>
            <h1 className={styles.title}>Order</h1>
            <form ref={formRef} className={styles.form}>
                <div className={styles.container}>
                    <img className={styles.image} src={image} alt="product image" />
                    <span className={styles.option}>필수 선택 항목</span>
                    <span> (미선택시 주문 불가)</span>
                    <select ref={menuRef} className={styles.select} name="menu" id="menu-select" onChange={setMenuImages} >
                        <option value="">메뉴를 선택해주세요.</option>
                        <option value="espresso">에스프레소 (4,000)</option>
                        <option value="americano">아메리카노 (4,500)</option>
                        <option value="coffee-latte">카페라떼 (4,500)</option>
                        <option value="cappuccino">카푸치노 (4,500)</option>
                        <option value="caramel-macchiato">카라멜 마끼야또 (5,900)</option>
                        <option value="mocha-frappuccino">모카 프라푸치노 (5,900)</option>
                        <option value="java-chip-frappuccino">자바칩 프라푸치노 (6,300)</option>
                        <option value="mango-banana-blended">망고 바나나 블렌디드 (6,300)</option>
                        <option value="cool-lime-fizzio">쿨라임 피지오 (5,900)</option>
                        <option value="green-tea">제주 유기 녹차 (5,300)</option>
                        <option value="mint-blend-tea">민트 블렌디드티 (4,500)</option>
                    </select>
                    <select ref={sizeRef} className={styles.select} name="size" id="size-select">
                        <option value="">사이즈를 선택해주세요.</option>
                        <option value="tall">톨</option>
                        <option value="grande">그란데 (500)</option>
                        <option value="venti">벤티 (1,000)</option>
                    </select>
                    <select ref={tempRef} className={styles.select} name="drink-temperature" id="drink-temperature-select">
                        <option value="">HOT / ICE 를 선택해주세요.</option>
                        <option value="ice">차가운</option>
                        <option value="hot">따뜻한</option>
                    </select>
                    <select ref={cupRef} className={styles.select} name="cup" id="cup-select">
                        <option value="">컵을 선택해주세요.</option>
                        <option value="ice">매장컵</option>
                        <option value="hot">개인컵</option>
                        <option value="hot">일회용컵</option>
                    </select>
                    <p className={styles.option}>Personal Option</p>
                    <ul className={styles.list}>
                        샷 추가 (샷 추가시 1샷마다 500원의 추가금이 발생합니다.)
                        <div className={styles.counter} >
                            <p>{shot}</p>
                            <button className={styles.count} onClick={addCount} data-index="shot-add">+1</button>
                            <button className={styles.count} onClick={subtractCount} data-index="shot-sub">-1</button>
                            <button className={styles.count} onClick={resetCount} data-index="shot-reset">Reset</button>
                        </div>
                        <li>시럽 추가 (시럽 추가시 500원의 추가금이 발생합니다.)</li>
                        <select ref={syrupRef} name="syrup" id="syrup-select">
                        <option value="">시럽 선택 안함</option>
                        <option value="caramel">카라멜</option>
                        <option value="hazelnut">헤이즐넛</option>
                        <option value="vanila">바닐라</option>
                        </select>
                        <div className={styles.counter}>
                            <p>{syrup}</p>
                            <button className={styles.count} onClick={addCount} data-index="syrup-add">+1</button>
                            <button className={styles.count} onClick={subtractCount} data-index="syrup-sub">-1</button>
                            <button className={styles.count} onClick={resetCount} data-index="syrup-reset">Reset</button>
                        </div>
                        <li>얼음</li>
                        <select ref={iceRef} name="ice" id="ice-select">
                        <option value="default">보통(기본)</option>
                        <option value="less">적게</option>
                        <option value="full">많이</option>
                        </select>
                    </ul>
                    <div className={styles.preview}>
                            <button className={styles.submit} onClick={onSubmit}>주문하기</button>
                            <button className={styles.reset} onClick={onCancle}>취소</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default OrderSheet;