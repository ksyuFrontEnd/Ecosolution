import './electricity.css';

function Electricity() {
    return (
        <section className="electricity">
            <div className="electricity-container container">
                <div className="electricity__wrapper">
                    <h2 className="electricity__section-header section-header">Electricity we produced for all time</h2>
                    <div className="electricity__separator"></div>
                    <div className="electricity__content">
                        <p className="electricity__content-numbers">1.134.147.814</p>
                        <p className="electricity__content-kwh">kWh</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Electricity;