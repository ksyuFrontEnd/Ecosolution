import './header.css';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as ArrowDown } from '../../img/arrow-down.svg';
import BurgerMenu from '../burger-menu/BurgerMenu';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const headerHeight = 112;

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > headerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
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
