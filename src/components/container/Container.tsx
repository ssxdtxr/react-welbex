import React, {FC, PropsWithChildren} from 'react';
// @ts-ignore
import styles from "./Container.module.scss"

export const Container: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};