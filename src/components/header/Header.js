import './header.css';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { ReactComponent as ArrowDown } from '../../img/arrow-down.svg';
import BurgerMenu from '../burger-menu/BurgerMenu';
import { Link } from 'react-scroll';

function Header() {
    const headerHeight = 112;

    return (
        <header className="header">
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
