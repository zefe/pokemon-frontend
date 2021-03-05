import React from 'react';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';


export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className="main-content">
                {children}
            </div>
        </>
    )
}
