import React, {FC, PropsWithChildren} from 'react';
import {Header} from './header/Header';
import {Footer} from "./footer/Footer";
import {Container} from "../container/Container";


export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <Container>
            <Header/>
            {children}
            <Footer/>
        </Container>
    );
};

