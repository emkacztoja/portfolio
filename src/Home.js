import React from 'react';
import './Home.css';
import Header from './Header';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="content">
        <h2>Siema, Jestem Emkacz!</h2>
        <p>Naciśnij przycisk "Portfolio", aby zobaczyć moją pracę, lub przycisk "O Mnie", aby dowiedzieć się więcej</p>
        <Link to="/portfolio" className="portfolio-button">PORTFOLIO</Link>
        <Link to="/O_mnie" className="portfolio-button">O Mnie</Link>
      </div>
    </div>
  );
}

export default Home;
