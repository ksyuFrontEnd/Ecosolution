import React, { useState } from 'react';
import './style.css';
import { ReactComponent as MenuIcon } from '../../img/menu-icon.svg';
import { ReactComponent as CloseIcon } from '../../img/close-icon.svg';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <div className="burger-menu">
            <button className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <CloseIcon className="close-icon" /> : <MenuIcon />} 
            </button>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <a className="menu-close" onClick={toggleMenu}>
                    <CloseIcon className="close-icon" width="10" height="10"/>
                    <span>close</span>
                </a>
                <hr className="separator" />
                <ul>
                    <li><a href="#main">Main</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#cases">Cases</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    );
  }
  
  export default BurgerMenu;