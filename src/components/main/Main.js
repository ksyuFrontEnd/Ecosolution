import './main-section.css';
import wind_turbine from '../../img/wind-turbine.jpg'
import {ReactComponent as ArrowRight} from '../../img/arrow-right.svg'

function Main() {
    return (
        <section className="main">
            <div className="main-container container">
                <div className="main__upper-content">
                    <h1 className="main__header">RENEWABLE ENERGY For any task</h1>
                    <p className="main__text text">Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</p>
                    <button className="learn-more-btn" type="button">
                        <span>Learn more</span>
                        <ArrowRight className="arrow-right" width="32" height="32"/>
                    </button>
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
    )
}

export default Main;