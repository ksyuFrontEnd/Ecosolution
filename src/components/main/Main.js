import './main-section.css';
import wind_turbine from '../../img/wind-turbine.jpg'
import {ReactComponent as ArrowRight} from '../../img/arrow-right.svg'
import { Element, Link } from 'react-scroll';
import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

function Main() {
    const [isVisible, setIsVisible] = useState(false);
    const headerHeight = 112;

    const handleChange = (visible) => {
        if (visible) {
            setIsVisible(true);
        }
    };

    return (
        <VisibilitySensor onChange={handleChange} partialVisibility>
            <Element name="main" className={`element ${isVisible ? 'active' : ''}`}>
                <section className="main__section" id="main">
                    <div className="main-container container">
                        <div className="main__upper-content">
                            <h1 className="main__header">RENEWABLE ENERGY For any task</h1>
                            <p className="main__text text">Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</p>
                            <Link to="cases" smooth={true} offset={-headerHeight} className="learn-more-btn">
                                <span>Learn more</span>
                                <ArrowRight className="arrow-right" width="32" height="32"/>
                            </Link>
                        </div>
                        <hr className="main__separator" />
                        <div className="main__lower-content">
                            <div className="main__address contact-info">
                                <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                            </div>
                            <div className="main__email contact-info">
                                <p>office@ecosolution.com</p>
                            </div>
                            <div className="main__copyright-text">
                                <p>ecosolution © 2023</p>
                            </div>
                        </div>
                        <div className="main__img">
                            <img src={wind_turbine} alt="Wind Turbine" />
                        </div>
                    </div>
                </section>
            </Element>
        </VisibilitySensor>
    )
}

export default Main;