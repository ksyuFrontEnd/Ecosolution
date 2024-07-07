import './burger-menu.css';
import { ReactComponent as MenuIcon } from '../../img/menu-icon.svg';
import { ReactComponent as CloseIcon } from '../../img/close-icon.svg';
import { ReactComponent as ArrowUpRight } from '../../img/arrow-up-right.svg';
import { ReactComponent as Facebook } from '../../img/facebook.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';
import { useState } from 'react';
import { Link } from 'react-scroll';

function BurgerMenu({ headerHeight }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="burger-menu">
            <button className="menu-btn" onClick={toggleMenu}>
                {isOpen ? <CloseIcon className="close-icon" /> : <MenuIcon className="menu-icon" />}
            </button>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <button className="menu-close-btn" onClick={toggleMenu}>
                    <CloseIcon className="close-icon" width="20" height="20" />
                    <span>close</span>
                </button>
                <hr className="menu__separator" />
                <div className="menu__body">
                    <ul className="menu__list">
                        <li className={`menu__item ${activeSection === 'main' ? 'active' : ''}`}>
                            <Link to="main" spy={true} smooth={true} offset={-headerHeight} onClick={closeMenu} className="menu__link">     
                                Main
                            </Link>
                            <ArrowUpRight className="menu-arrow" width="16" height="16" stroke="rgba(255, 255, 255, 0.25)"/>
                        </li>
                        <li className={`menu__item ${activeSection === 'about' ? 'active' : ''}`}>
                            <Link to="about" spy={true} smooth={true} offset={-headerHeight} onClick={closeMenu} className="menu__link">
                                About
                            </Link>
                            <ArrowUpRight className="menu-arrow" width="16" height="16" stroke="rgba(255, 255, 255, 0.25)"/>
                        </li>
                        <li className={`menu__item ${activeSection === 'cases' ? 'active' : ''}`}>
                            <Link to="cases" spy={true} smooth={true} offset={-headerHeight} onClick={closeMenu} className="menu__link">
                                Cases
                            </Link>
                            <ArrowUpRight className="menu-arrow" width="16" height="16" stroke="rgba(255, 255, 255, 0.25)"/>
                        </li>
                        <li className={`menu__item ${activeSection === 'faq' ? 'active' : ''}`}>
                            <Link to="faq" spy={true} smooth={true} offset={-headerHeight} onClick={closeMenu} className="menu__link">
                                FAQ
                            </Link>
                            <ArrowUpRight className="menu-arrow" width="16" height="16" stroke="rgba(255, 255, 255, 0.25)"/>
                        </li>
                        <li className={`menu__item ${activeSection === 'contact-us' ? 'active' : ''}`}>
                            <Link to="contact-us" spy={true} smooth={true} offset={-headerHeight} onClick={closeMenu} className="menu__link">
                                Contact Us
                            </Link>
                            <ArrowUpRight className="menu-arrow" width="16" height="16" stroke="rgba(255, 255, 255, 0.25)"/>
                        </li>
                    </ul>
                    <div className="menu__social-icons">
                        <a href="#"><Facebook className="facebook header-menu-icon" width="24px" height="24px" /></a>
                        <a href="#"><Instagram className="instagram header-menu-icon" width="24px" height="24px" /></a>
                    </div>
                </div>
            </nav>
            {isOpen && <div className="blur-background" />}
        </div>
    );
}

export default BurgerMenu;
