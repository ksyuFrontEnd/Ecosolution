import './electricity.css';
import { useState, useEffect } from 'react';

function Electricity() {
    const [counter, setCounter] = useState(1134147814);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="electricity__section">
            <div className="electricity-container container">
                <div className="electricity__wrapper">
                    <h2 className="electricity__section-header section-header">Electricity we produced for all time</h2>
                    <div className="electricity__separator"></div>
                    <div className="electricity__content">
                        <p className="electricity__content-numbers">{counter.toLocaleString()}</p>
                        <p className="electricity__content-kwh">kWh</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Electricity;