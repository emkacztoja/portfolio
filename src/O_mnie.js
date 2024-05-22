import React from 'react';
import './O_mnie.css';
import Header from './Header';
import { Link } from "react-router-dom";

function O_mnie() {
  return (
    <div className="O_mnie">
      <Header />
      <div className="o-mnie-content">
        <h2>O mnie</h2>
        <p>Witaj! Nazywam się Aleksander Kowalczuk. Jestem pasjonatem fotografii i grafiki komputerowej. Moje prace możesz zobaczyć na tej stronie. Zapraszam do kontaktu!</p>
      </div>
      <Link to="/kontakt" className="nigga-button">KONTAKT</Link>
    </div>
  );
}

export default O_mnie;
