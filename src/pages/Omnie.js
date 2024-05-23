import React from 'react';
import './styling/O_mnie.css';
import Header from './Header';
import { Link } from "react-router-dom";

function Omnie() {
  return (
    <div className="O_mnie">
      <Header />
      <div className="o-mnie-content">
        <h2>O mnie</h2>
        <p>Witaj! Nazywam się Aleksander Kowalczuk. Jestem pasjonatem fotografii i grafiki komputerowej. Moje prace możesz zobaczyć wybierając "PORTFOLIO" w pasku nawigacyjnym. </p>
        <h3>Zapraszam do kontaktu!</h3>
      </div>
      <Link to="/kontakt" className="nigga-button">KONTAKT</Link>
    </div>
  );
}

export default Omnie;
