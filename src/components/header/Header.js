import './header.css';
import {ReactComponent as Logo} from '../../img/logo.svg';
import {ReactComponent as GetInTouch} from '../../img/get-in-touch.svg';
import BurgerMenu from '../burger-menu/BurgerMenu';

function Header() {
    return (
        <header className="header">
            <div className="header-container container">
                <a href="/" ><Logo className="logo" width="269px" height="40px" fill="#173d33" /></a>
                <div className="buttons__wrapper">
                    <BurgerMenu />
                    <button className="get-in-touch-btn" type="button">
                        <span>Get in touch</span>
                        <GetInTouch className="get-in-touch" width="14" height="14" fill="#173d33" />
                    </button> 
                </div>        
            </div>
        </header>
    )
}

export default Header;