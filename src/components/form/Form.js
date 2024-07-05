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

    if (!formData.fullName) {
      tempErrors.fullName = 'Wrong Fullname';
    } else if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(formData.fullName)) {
      tempErrors.fullName = 'Wrong Fullname';
    }

    if (!formData.email) {
      tempErrors.email = 'Wrong Email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Wrong Email';
    }

    if (!formData.phone) {
      tempErrors.phone = 'Wrong Phone';
    } else if (!/^\d+$/.test(formData.phone)) {
      tempErrors.phone = 'Wrong Phone';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        alert('Form submitted successfully');
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <div className="contact-us__form">
      <form onSubmit={handleSubmit}>
        <div className="form-item required">
          <label className="text">* Full name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Rosie"
          />
          {errors.fullName && <p>{errors.fullName}</p>}
        </div>

        <div className="form-item required">
          <label className="text">* E-mail:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johnrosie@gmail.com"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-item required">
          <label className="text">* Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="380961234567"
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <div className="form-item non-required">
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
