import './header.css';
import BurgerMenu from '../burger-menu/BurgerMenu';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as ArrowDown } from '../../img/arrow-down.svg';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const headerHeight = 112;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > headerHeight) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [headerHeight]);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container container">
                <a href="/"><Logo className="logo" width="269px" height="40px" fill="#173d33" /></a>
                <div className="buttons__wrapper">
                    <BurgerMenu headerHeight={headerHeight} />
                    <Link to="contact-us" smooth={true} offset={-headerHeight} className="get-in-touch-btn">
                        <span>Get in touch</span>
                        <ArrowDown className="get-in-touch" width="14" height="14" fill="#173d33" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
