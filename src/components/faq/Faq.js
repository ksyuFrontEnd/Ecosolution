import './faq.css';
import { useState } from 'react';
import FaqItem from '../faq-item/FaqItem';
import {ReactComponent as ArrowDown} from '../../img/arrow-down.svg';
import { Element } from 'react-scroll';

function Faq() {

    const faqItems = [
        {
          question: "How do wind turbines and solar panels work together in a renewable energy system?",
          answer: "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."
        },
        {
          question: "What sets EcoSolution's renewable energy solutions apart from others on the market?",
          answer: "Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions."
        },
        {
          question: "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
          answer: "Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future."
        },
        {
          question: "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
          answer: "EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact."
        },
        {
          question: "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
          answer: "EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all."
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const handleItemClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Element name="faq" className="element">
            <section className="faq__section">
                <div className="faq-container container">
                    <div className="faq__wrapper">
                        <h2 className="faq__section-header section-header">Frequently Asked Questions</h2>
                        <div className="faq__body">
                            {faqItems.map((item, index) => (
                                <FaqItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => handleItemClick(index)}
                                />
                            ))}
                        </div>
                        <div className="faq__info">
                            <p>Didn't find the answer to your question?</p>
                            <button className="contact-us-btn" type="button">
                                <span>Contact Us</span>
                                <ArrowDown className="contact-us" width="14" height="14" fill="#173d33" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Faq;