import React, { useState } from 'react';
import './burger-menu.css';
import { ReactComponent as MenuIcon } from '../../img/menu-icon.svg';
import { ReactComponent as CloseIcon } from '../../img/close-icon.svg';
import {ReactComponent as ArrowUpRight} from '../../img/arrow-up-right.svg';
import {ReactComponent as Facebook} from '../../img/facebook.svg';
import {ReactComponent as Instagram} from '../../img/instagram.svg';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <div className="burger-menu">
            <button className="menu-btn" onClick={toggleMenu}>
                {isOpen ? <CloseIcon className="close-icon" /> : <MenuIcon className="menu-icon"/>} 
            </button>
                <nav className={`menu ${isOpen ? 'open' : ''}`}>
                    <button className="menu-close-btn" onClick={toggleMenu}>
                        <CloseIcon className="close-icon" width="20" height="20"/>
                        <span>close</span>
                    </button>
                    <hr className="menu__separator" />
                    <div className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="#main" className="menu__link">Main</a>
                                <ArrowUpRight className="menu-arrow" width="16" height="16" stroke="rgba(255, 255, 255, 0.25)" />
                            </li>
                            <li className="menu__item">
                                <a href="#about" className="menu__link">About</a>
                                <ArrowUpRight className="menu-arrow" width="16" height="16" stroke="rgba(255, 255, 255, 0.25)" />
                            </li>
                            <li className="menu__item">
                                <a href="#cases" className="menu__link">Cases</a>
                                <ArrowUpRight className="menu-arrow" width="16" height="16" stroke="rgba(255, 255, 255, 0.25)" />
                            </li>
                            <li className="menu__item">
                                <a href="#faq" className="menu__link">FAQ</a>
                                <ArrowUpRight className="menu-arrow" width="16" height="16" stroke="rgba(255, 255, 255, 0.25)" />
                            </li>
                            <li className="menu__item">
                                <a href="#contact-us" className="menu__link">Contact Us</a>
                                <ArrowUpRight className="menu-arrow" width="16" height="16" stroke="rgba(255, 255, 255, 0.25)" />
                            </li>
                        </ul>
                        <div className="menu__social-icons">
                                <a href="#" ><Facebook className="facebook header-menu-icon" width="24px" height="24px"  /></a>
                                <a href="#" ><Instagram className="instagram header-menu-icon" width="24px" height="24px" /></a>
                        </div>
                    </div>
                </nav>
        </div>
    );
  }
  
  export default BurgerMenu;