import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Kontakt from './Kontakt';
import Portfolio from './Portfolio';
import O_mnie from './O_mnie';
import Cennik from './Cennik';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/o_mnie" element={<O_mnie />} />
        <Route path="/cennik" element={<Cennik />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
