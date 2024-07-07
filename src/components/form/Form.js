import './form.css';
import { useState } from 'react';
import {ReactComponent as ArrowRight} from '../../img/arrow-right.svg'

function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!/^[A-Z][a-z]+ [A-Z][a-z]+$/.test(formData.fullName)) {
      tempErrors.fullName = 'Wrong Fullname';
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Wrong Email';
    }

    if (!/^\d+$/.test(formData.phone)) {
      tempErrors.phone = 'Wrong Phone';
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        alert('Yoohoooo! Form submitted successfully!:)');
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <div className="contact-us__form">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label className="text">* Full name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Rosie"
            className={errors.fullName ? 'error' : ''}
          />
          {errors.fullName && <p>{errors.fullName}</p>}
        </div>

        <div className="form-item">
          <label className="text">* E-mail:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johnrosie@gmail.com"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-item">
          <label className="text">* Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="380961234567"
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <div className="form-item">
          <label className="text">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
          />
        </div>
        <button type="submit" disabled={submitted} className="submit-btn">
            <span>Send</span>
            <ArrowRight className="arrow-right" width="32" height="32"/>
        </button>
      </form>
    </div>
  );
};

export default Form;
