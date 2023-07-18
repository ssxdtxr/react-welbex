import React from 'react';
// @ts-ignore
import styles from "./Footer.module.scss"
import {GlobalSvgSelector} from "../../../assets/icons/GlobalSvgSelector";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topFooter}>
                <div className={styles.mainInfo}>
                    <div className={styles.info}>
                        <span>О компании</span>
                        <ul>
                            <li>Партнёрская программа</li>
                            <li>Вакансии</li>
                        </ul>
                    </div>
                    <div className={styles.menu}>
                        <div className={styles.info}>
                            <span>Меню</span>
                            <ul>
                                <li>Расчёт стоимости</li>
                                <li>Услуги</li>
                                <li>Виджеты</li>
                                <li>Интеграции</li>
                                <li>Наши клиенты</li>
                            </ul>
                        </div>
                        <div className={styles.info}>
                            <span>.</span>
                            <ul>
                                <li>Кейсы</li>
                                <li>Благодарственные письма</li>
                                <li>Сертификаты</li>
                                <li>Блог на Youtube</li>
                                <li>Вопрос / Ответ</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <span>Контакты</span>
                    <a href={'tel:75555555555'}>+7 555 555-55-55</a>
                    <div className={styles.feedback}>
                        <GlobalSvgSelector id={'telegram'}/>
                        <GlobalSvgSelector id={'phone'}/>
                        <GlobalSvgSelector id={'whatsApp'}/>
                    </div>
                    <div>
                        Москва, Путевой проезд 3с1, к 902
                    </div>
                </div>
            </div>
            <div className={styles.confid}>
                <span>©WELBEX 2022. Все права защищены.</span>
                <span>Политика конфиденциальности</span>
            </div>
        </footer>
    );
};

