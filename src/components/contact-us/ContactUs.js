import './contact-us.css';
import { ReactComponent as Phone } from '../../img/phone.svg';
import { ReactComponent as Email } from '../../img/email.svg';
import { ReactComponent as Address } from '../../img/address.svg';
import { ReactComponent as FacebookEmpty } from '../../img/facebook-empty.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';
import Form from '../form/Form';
import { Element } from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';


function ContactUs() {
    const [isVisible, setIsVisible] = useState(false);

    const handleChange = (visible) => {
        if (visible) {
            setIsVisible(true);
        }
    };

    return (
        <VisibilitySensor onChange={handleChange} partialVisibility>
            <Element name="contact-us" className={`element ${isVisible ? 'active' : ''}`}>
                <section className="contact-us__section" id="contact-us">
                    <div className="contact-us-container container">
                        <h2 className="contact-us__section-header section-header">Contact us</h2>
                        <div className="contact-us__body">
                            <div className="contact-us__contacts">
                                <div className="contacts__phone">
                                    <p className="contacts__phone-text text contacts-title first-contact-title">Phone:</p>
                                    <div className="contacts__phone-wrapper">
                                        <a href="380 98 12 34 567" className="contacts__body">
                                            <Phone className="phone contacts__icon" width="24" height="24" stroke="#173D33" />
                                            <span className="contacts__phone-number text contacts-info">38 (098) 12 34 567</span>
                                        </a>
                                        <a href="380 93 12 34 567" className="contacts__body">
                                            <Phone className="phone contacts__icon" width="24" height="24" stroke="#173D33" />
                                            <span className="contacts__phone-number text contacts-info">38 (093) 12 34 567</span>
                                        </a>  
                                    </div> 
                                </div>

                                <div className="contacts__e-mail:">
                                    <p className="contacts__e-mail-text text contacts-title">E-mail:</p>
                                    <a href="mailto:office@ecosolution.com" className="contacts__body">
                                        <Email className="e-mail contacts__icon" width="24" height="24" stroke="#173D33" />
                                        <span className="contacts__e-mail text contacts-info">office@ecosolution.com</span>
                                    </a>
                                </div>

                                <div className="contacts__address">
                                    <p className="contacts__address-text text contacts-title">Address:</p>
                                    <p className="contacts__body">
                                        <Address className="address-contacts contacts__icon" width="24" height="24" stroke="#173D33" />
                                        <span className="contacts__address text contacts-info">79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
                                    </p>
                                </div>

                                <div className="contacts__socials">
                                    <p className="contacts__socials-text text contacts-title">Social Networks:</p>
                                    <div className="contacts__body-icons">
                                        <a href="#" className="contacts__social-icon">
                                            <FacebookEmpty className="socials__facebook contacts__icon" width="24" height="24" />
                                        </a>
                                        <a href="#" className="contacts__social-icon">
                                            <Instagram className="socials__instagram contacts__icon" width="24" height="24" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Form />
                        </div>
                    </div>
                </section>
            </Element>
        </VisibilitySensor>
    )
}

export default ContactUs;