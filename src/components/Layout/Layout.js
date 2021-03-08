import React from 'react';
import { MenuResponsive } from '../MenuResponsive/MenuResponsive';
import { Sidebar } from '../Sidebar/Sidebar';


export const Layout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <MenuResponsive />
            <div className="main-content">
                {children}
            </div>
        </>
    )
}
