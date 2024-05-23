import React from 'react';
import './styling/Header.css';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/">HOME</Link>
          <Link to="/portfolio">PORTFOLIO</Link>
          <Link to="/o_mnie">O&nbsp;MNIE</Link>
          <Link to="/kontakt">KONTAKT</Link>
          <Link to="/cennik">CENNIK</Link>
        </div>
        <div className="navbar-center">
          <h1>Aleksander Kowalczuk</h1>
        </div>
        <div className="navbar-right">
          <a href="https://www.instagram.com/emkacz_photo" aria-label="Instagram">
            <FaInstagram size={64} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
