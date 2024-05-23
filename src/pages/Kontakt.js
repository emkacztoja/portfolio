import React, { useState } from 'react';
import './styling/Kontakt.css';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';

function Kontakt() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/summary', { state: formData });
  };

  return (
    <div className="Kontakt">
      <Header />
      <div className="Kontakt-content">
        <h2>Skontaktuj się ze mną za pomocą formularza poniżej</h2>
        <p>Lub naciśnij przycisk poniżej aby zobaczyć cennik</p>
        <Link to="/cennik" className="nigga-button">Cennik</Link>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Imię:</label>
            <input type="text" id="name" name="name" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefon:</label>
            <input type="tel" id="phone" name="phone" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Wiadomość:</label>
            <textarea id="message" name="message" rows="5" required onChange={handleChange}></textarea>
          </div>
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </div>
  );
}

export default Kontakt;
