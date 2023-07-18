import React from 'react';
import {Layout} from "../layout/Layout";
import {MainInfo} from "../MainInfo/MainInfo";
import {GlobalSvgSelector} from "../../assets/icons/GlobalSvgSelector";
// @ts-ignore
import styles from "./Welbex.module.scss"
export const Welbex = () => {
    return (
        <div className={styles.welbex}>
            <span className={styles.redFon}>
                <GlobalSvgSelector id={'redLight'}/>
            </span>
            <Layout>
                <span className={styles.redBall}>
                    <GlobalSvgSelector id={'bigBall'}/>
                </span>
                <span className={styles.purpleBall}>
                    <GlobalSvgSelector id={'purpleBall'}/>
                </span>
                <MainInfo/>
            </Layout>
        </div>
    );
};

