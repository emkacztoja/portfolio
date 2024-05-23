import React from 'react';
import { useLocation } from 'react-router-dom';
import './styling/Kontakt.css';
import Header from './Header';

function Summary() {
  const location = useLocation();
  const { state } = location;
  const { name, email, phone, message } = state || {};

  if (!state) {
    return (
      <div className="Kontakt">
        <Header />
        <div className="Kontakt-content">
          <h2>Błąd</h2>
          <p>Nie znaleziono danych formularza. Proszę spróbować ponownie.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="Kontakt">
      <Header />
      <div className="Kontakt-content">
        <h2>Twoja wiadomość została wysłana</h2>
        <p>Podsumowanie wiadomości:</p>
        <div className="summary">
          <p><strong>Imię:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Telefon:</strong> {phone}</p>
          <p><strong>Wiadomość:</strong> {message}</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
