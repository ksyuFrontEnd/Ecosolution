import './style.css';
import logo from './../../img/logo.png'
import {ReactComponent as Get_in_touch} from '../../img/get-in-touch.svg';
import BurgerMenu from '../burger-menu/BurgerMenu';

function Header() {
    return (
        <header className="header">
            <div className="header-container container">
                <a href="/" className="logo"><img src={logo} alt="logo" /></a>
                <div className="buttons__wrapper">
                    <BurgerMenu />
                    <button className="get-in-touch-btn" type="button">
                        <span>Get in touch</span>
                        <Get_in_touch className="get-in-touch" fill="#173d33" width="14" height="14" />
                    </button> 
                </div>        
            </div>
        </header>
    )
}

export default Header;