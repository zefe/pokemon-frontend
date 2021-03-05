import React from 'react';
import { ReactComponent as LogOut } from '../../assets/icons/Logout.svg';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.png';

export const Sidebar = () => {
    return (
        <>
            <input type="checkbox" id="sidebar-toggle" />
            <div className="sidebar">
                <div className="sidebar-header">
                    <div className="logo">
                        <img src={ logo } alt="Logo" />
                    </div>
                    <div className="avatar">
                        <img src={ avatar } alt="Avatar" />
                    </div>
                    <div className="description">      
                        <h3>
                            ASHK123
                        </h3>
                        <h4>
                            Level 1
                        </h4>
                        <p>
                            "I worked hard on my test"
                        </p>

                    </div>
                </div>
                <div className="sidebar-footer">
                    <ul>
                        <li>
                            <a href="">
                                <span><LogOut /></span>
                                <span>Log out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <label for="sidebar-toggle" className="ti-menu-alt sidebar-icon-menu">label</label>
        </>
    )
}
