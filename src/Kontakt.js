import React from 'react';
import './Kontakt.css';
import Header from './Header';
import { Link } from "react-router-dom";

function Kontakt() {
  return (
    <div className="Kontakt">
      <Header />
      <div className="Kontakt-content">
      <h2>Skontaktuj się ze mną za pomocą formularza poniżej</h2>
      <p>Lub naciśnij przycisk poniżej aby zobaczyć cennik</p>
      <Link to="/cennik" className="nigga-button">Cennik</Link>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Imię:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Wiadomość:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </div>
  );
}

export default Kontakt;
