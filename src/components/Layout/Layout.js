import React from 'react';
import { Header } from '../Header/Header';
import { MenuResponsive } from '../Header/MenuResponsive';
import { Sidebar } from '../Sidebar/Sidebar';


export const Layout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <MenuResponsive />
            <Header />
            <div className="main-content">
                {children}
            </div>
        </>
    )
}
