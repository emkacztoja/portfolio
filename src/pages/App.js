import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Kontakt from './Kontakt';
import Portfolio from './Portfolio';
import Omnie from './Omnie';
import Cennik from './Cennik';
import Checkout from './Checkout';
import Summary from './Summary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/omnie" element={<Omnie />} />
        <Route path="/cennik" element={<Cennik />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
