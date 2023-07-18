import React from 'react';
// @ts-ignore
import styles from "./MainInfo.module.scss"
import {GlobalSvgSelector} from "../../assets/icons/GlobalSvgSelector";

export const MainInfo = () => {
    return (
        <div className={styles.mainInfo}>
            <div className={styles.leftSide}>
                <div className={styles.title}>
                    <div>
                        Зарабатывайте больше
                    </div>
                    <span>с WELBEX</span>
                </div>
                <p>Развиваем и контролируем продажи за вас</p>
            </div>

            <div className={styles.rightSide}>
                <div className={styles.free}>
                    <div>Вместе с <span>бесплатной</span></div>
                    <div><span>консультацией</span> мы дарим:</div>
                </div>
                <div className={styles.presents}>
                    <div className={styles.section}>
                        <span>Виджеты</span>
                        <p>30 готовых решений</p>
                    </div>
                    <div className={styles.section}>
                        <span>Dashboard</span>
                        <p>с показателями
                            вашего бизнеса</p>
                    </div>
                    <div className={styles.section}>
                        <span>Skype Аудит</span>
                        <p>отдела продаж и CRM системы</p>
                    </div>
                    <div className={styles.section}>
                        <span>35 дней</span>
                        <p>использования CRM</p>
                    </div>
                </div>
                <div className={styles.btn}>
                    <GlobalSvgSelector id={'smallBall'}/>
                    <button>Получить консультацию</button>
                </div>
            </div>

        </div>
    );
};

