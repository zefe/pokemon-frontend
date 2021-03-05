import React from 'react';

import search from '../../assets/icons/Search.svg';

export const Header = () => {
    return (
        <header>
            <div className="menu-icon">
                <label for="sidebar-toggle" className="ti-menu-alt sidebar-icon-menu">iconocmenu</label>
            </div>
            <div className="search-wrapper"> 
                <input type="text" name="" className="search-input" placeholder="Search"/>
                <div className="search-btn">
                    <img src={search} />
                </div>
            </div> 
        </header>
    )
}
