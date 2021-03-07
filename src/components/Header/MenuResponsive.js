import React from 'react';
import { ReactComponent as Menu} from '../../assets/icons/Menu.svg';
import logo  from '../../assets/images/logo.png';


export const MenuResponsive = () => {
    return (
            <div className="menu-container">
                <div className="menu-icon">
                    <label for="sidebar-toggle" ><Menu /></label>
                </div>
                <div className="logo-responsive">  
                    <img src={logo} alt="logo" />
                </div>
            </div>
    )
}
