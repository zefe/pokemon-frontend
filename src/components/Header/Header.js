import React from 'react';
import { useHistory } from 'react-router-dom';
import search from '../../assets/icons/Search.svg';
import back from '../../assets/icons/Back.svg';

export const Header = () => {

    
    const history = useHistory();

    console.log("HISTORY")
    console.log(history)


    const handleReturn = () => {
        /*
        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }
        */
        history.push('/');

    }

    return (
        <header>
            <div className="menu-icon">
                <label htmlFor="sidebar-toggle" className="ti-menu-alt sidebar-icon-menu">  </label>
                <div className="back-btn">
                    <img src={back} alt="imagen" onClick={ handleReturn } />
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
