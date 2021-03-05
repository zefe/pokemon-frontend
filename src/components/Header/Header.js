import React from 'react';

import search from '../../assets/icons/Search.svg';
import back from '../../assets/icons/Back.svg';

export const Header = () => {
    return (
        <header>
            <div className="menu-icon">
                <label htmlFor="sidebar-toggle" className="ti-menu-alt sidebar-icon-menu">  </label>
                <div className="back-btn">
                    <img src={back} alt="imagen"/>
                </div>
            </div>
            <div className="search-wrapper"> 
                <input type="text" name="" className="search-input" placeholder="Search"/>
                <div className="search-btn">
                    <img src={search} alt="imagen" />
                </div>
            </div> 
        </header>
    )
}
