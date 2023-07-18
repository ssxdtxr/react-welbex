import React from 'react';
// @ts-ignore
import styles from './Header.module.scss'
import {GlobalSvgSelector} from "../../../assets/icons/GlobalSvgSelector";


export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.topHeader}>
                <div className={styles.leftSide}>
                    <GlobalSvgSelector id={'logo'}/>
                    <ul>
                        <li>Услуги</li>
                        <li>Виджеты</li>
                        <li>Интеграции</li>
                        <li>Кейсы</li>
                        <li>Сертификаты</li>
                    </ul>
                </div>
                <div className={styles.rightSide}>
                    <a href={'tel:75555555555'}>+7 555 555-55-55</a>
                    <div className={styles.feedback}>
                        <GlobalSvgSelector id={'telegram'}/>
                        <GlobalSvgSelector id={'phone'}/>
                        <GlobalSvgSelector id={'whatsApp'}/>
                    </div>
                </div>
            </div>
            <div className={styles.bottomHeader}>
                крупный интегратор CRM в Росcии и ещё 8 странах
            </div>
        </header>
    );
};


