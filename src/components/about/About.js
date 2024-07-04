import './about.css';
import {ReactComponent as Openness} from '../../img/openness-icon.svg';
import {ReactComponent as Responsibility} from '../../img/responsibility-icon.svg';
import {ReactComponent as Innovation} from '../../img/innovation-icon.svg';
import {ReactComponent as Quality} from '../../img/quality-icon.svg';
import values_up from '../../img/values-up.jpg';
import values_down from '../../img/values-down.jpg';

function About() {
    return (
        <section className="about">
            <div className="about-container container">
                <div className="about__upper-content">
                    <h2 className="about__section-header section-header">Main values of our company</h2>
                    <div className="about__separator"></div>
                    <p className="about__text text">EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.</p>
                </div>
                <div className="about__lower-content">
                    <div className="openness-card values-card">
                        <div className="values-card__heading">
                            <Openness className="openness-icon values-card__icon" width="16" height="16"/>
                            <h3 className="values-card__title">Openness</h3>
                        </div>
                        <hr className="values-card__separator" />
                        <p className="values-card__text text">to the world, people, new ideas and projects</p>
                    </div>

                    <div className="responsibility-card values-card">
                        <div className="values-card__heading">
                            <Responsibility className="responsibility-icon values-card__icon" width="16" height="16"/>
                            <h3 className="values-card__title">Responsibility</h3>
                        </div>
                        <hr className="values-card__separator" />
                        <p className="values-card__text text">we are aware that the results of our work have an impact on our lives and the lives of future generations</p>
                    </div>

                    <div className="values-up-img values-card">
                        <img src={values_up} alt="Values image" />
                    </div>

                    <div className="innovation-card values-card">
                        <div className="values-card__heading">
                            <Innovation className="innovation-icon values-card__icon" width="16" height="16"/>
                            <h3 className="values-card__title">Innovation</h3>
                        </div>
                        <hr className="values-card__separator" />
                        <p className="values-card__text text">we use the latest technology to implement non-standard solutions</p>
                    </div>

                    <div className="quality-card values-card">
                        <div className="values-card__heading">
                            <Quality className="quality-icon values-card__icon" width="16" height="16"/>
                            <h3 className="values-card__title">Quality</h3>
                        </div>
                        <hr className="values-card__separator" />
                        <p className="values-card__text text">we do not strive to be the first among others, but we want to be the best in our business</p>
                    </div>

                    <div className="values-down-img values-card">
                        <img src={values_down} alt="Values image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;