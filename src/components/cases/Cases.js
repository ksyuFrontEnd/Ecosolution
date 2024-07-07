import './cases.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {ReactComponent as NavPrev} from '../../img/nav-prev.svg';
import {ReactComponent as NavNext} from '../../img/nav-next.svg';
import {ReactComponent as ArrowUpRight} from '../../img/arrow-up-right.svg';
import slide_1 from '../../img/slide-1.jpg';
import slide_2 from '../../img/slide-2.jpg';
import slide_3 from '../../img/slide-3.jpg';
import slide_4 from '../../img/slide-4.jpg';
import slide_5 from '../../img/slide-5.jpg';
import { Element } from 'react-scroll';


function Cases() {
    return (
        <Element name="cases" className="element">
            <section className="cases__section">
                <div className="cases-container container">
                    <div className="cases__content">
                        <h2 className="cases__section-header section-header">Successful cases of our company</h2>
                        <div className="cases__separator"></div>
                        <div className="cases__mode">
                            <div className="pagination"></div>
                            <div className="navigation">
                                <NavPrev className="nav-prev" width="66" height="66" stroke="#173D33"/>
                                <NavNext className="nav-next" width="66" height="66" stroke="#173D33"/> 
                            </div>
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.nav-prev',
                            nextEl: '.nav-next',
                        }}
                        pagination={{
                            el: '.pagination',
                            type: 'custom',
                            renderCustom: (swiper, current, total) => {
                                const currentFormatted = String(current).padStart(2, '0');
                                const totalFormatted = String(total).padStart(2, '0');
                                return `<span class="pagination-current">${currentFormatted}</span> <span class="pagination-total">/ ${totalFormatted}</span>`;
                            }
                        }}
                        loop={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 2,
                                spaceBetween: 48,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="swiper__card">
                                <div className="swiper__card-img">
                                    <img src={slide_1} alt="Wind Power for auto field irrigation" />
                                </div>
                                <div className="swiper__card-wrapper">
                                    <div className="swiper__card-info">
                                        <p className="swiper__card-description">Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”</p>
                                        <button className="swiper__goto-btn">
                                            <ArrowUpRight className="slide-arrow" width="28" height="28" stroke="#173D33"/>
                                        </button>    
                                    </div>
                                    <hr className="swiper__separator" />
                                    <div className="swiper__capture">
                                        <p>Wind Power for auto field irrigation</p>
                                        <p>July 2023</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper__card">
                                <div className="swiper__card-img">
                                    <img src={slide_2} alt="Solar Panels" />
                                </div>
                                <div className="swiper__card-wrapper">
                                    <div className="swiper__card-info">
                                        <p className="swiper__card-description">Zhytomyr city<br/>
                                        Private Enterprise “Bosch”</p>
                                        <button className="swiper__goto-btn">
                                            <ArrowUpRight className="slide-arrow" width="28" height="28" stroke="#173D33"/>
                                        </button>    
                                    </div>
                                    <hr className="swiper__separator" />
                                    <div className="swiper__capture">
                                        <p>Solar Panels for industrial use</p>
                                        <p>November 2023</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper__card">
                                <div className="swiper__card-img">
                                    <img src={slide_3} alt="Thermal modules" />
                                </div>
                                <div className="swiper__card-wrapper">
                                    <div className="swiper__card-info">
                                        <p className="swiper__card-description">Rivne city<br/>
                                        Private Enterprise “Biotech”</p>
                                        <button className="swiper__goto-btn">
                                            <ArrowUpRight className="slide-arrow" width="28" height="28" stroke="#173D33"/>
                                        </button>    
                                    </div>
                                    <hr className="swiper__separator" />
                                    <div className="swiper__capture">
                                        <p>Thermal modules</p>
                                        <p>October 2023</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper__card">
                                <div className="swiper__card-img">
                                    <img src={slide_4} alt="Wind power" />
                                </div>
                                <div className="swiper__card-wrapper">
                                    <div className="swiper__card-info">
                                        <p className="swiper__card-description">Kherson city<br/>
                                        Private Enterprise “HealthyFarm”</p>
                                        <button className="swiper__goto-btn">
                                            <ArrowUpRight className="slide-arrow" width="28" height="28" stroke="#173D33"/>
                                        </button>    
                                    </div>
                                    <hr className="swiper__separator" />
                                    <div className="swiper__capture">
                                        <p>Wind power</p>
                                        <p>September 2021</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide> 
                        <SwiperSlide>
                            <div className="swiper__card">
                                <div className="swiper__card-img">
                                    <img src={slide_5} alt="Mini nuclear stations" />
                                </div>
                                <div className="swiper__card-wrapper">
                                    <div className="swiper__card-info">
                                        <p className="swiper__card-description">Zaporizhia city<br/>
                                        Private Enterprise “Biotech”</p>
                                        <button className="swiper__goto-btn">
                                            <ArrowUpRight className="slide-arrow" width="28" height="28" stroke="#173D33"/>
                                        </button>    
                                    </div>
                                    <hr className="swiper__separator" />
                                    <div className="swiper__capture">
                                        <p>Mini nuclear stations</p>
                                        <p>May 2021</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>      
                    </Swiper>
                </div>
            </section>
        </Element>
    )
}

export default Cases;