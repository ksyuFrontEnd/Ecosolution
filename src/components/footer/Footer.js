import './footer.css';
import {ReactComponent as Logo} from '../../img/logo.svg';
import {ReactComponent as Facebook} from '../../img/facebook.svg';
import {ReactComponent as Instagram} from '../../img/instagram.svg';
// import arrow-up from './../../img/arrow-up.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <hr className="footer__separator" />
                <div className="footer__content">
                    <a href="/" ><Logo className="logo" width="269px" height="40px" fill="#173d33" /></a>  
                    {/* <div className="arrow-up"></div> */}
                    <div className="social-icons">
                        <a href="#" ><Facebook className="facebook footer-icon" width="24px" height="24px" stroke="#173D33" /></a>
                        <a href="#" ><Instagram className="instagram footer-icon" width="24px" height="24px" stroke="#173D33" /></a>
                    </div>  
                    <div className="address contact-info">
                        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                    </div>
                    <div className="email contact-info">
                        <p>office@ecosolution.com</p>
                    </div>
                    <div className="copyright contact-info">
                        <p>ecosolution © 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;