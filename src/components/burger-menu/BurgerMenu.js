import React, { useState } from 'react';
import './style.css';
import menu from './../../img/menu.svg';
import close from './../../img/menu-close.svg';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <div className="burger-menu">
            <button className="menu-icon" onClick={toggleMenu}>
                <div className="menu-icon__wrapper">
                    <img src={isOpen ? close : menu} alt={isOpen ? "close" : "menu"} />
                </div>
            </button>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <a className="menu-close" onClick={toggleMenu}>
                    <img src={close} alt="close" />
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