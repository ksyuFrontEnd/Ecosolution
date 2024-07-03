import './style.css';
import logo from './../../img/logo.png'
import dot from './../../img/dot.svg';
import BurgerMenu from '../burger-menu/BurgerMenu';

function Header() {
    return (
        <header className="header">
            <div className="header-container container">
                <a href="/" className="header__logo"><img src={logo} alt="logo" /></a>
                <div className="buttons__wrapper">
                    <BurgerMenu />
                    <button className="get-in-touch" type="button">
                        <span>Get in touch</span>
                        <img src={dot} alt="dot" />
                    </button> 
                </div>        
            </div>
        </header>
    )
}

export default Header;