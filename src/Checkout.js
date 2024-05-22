import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import './Checkout.css';

function Checkout() {
  const location = useLocation();
  const { customPlan } = location.state || { customPlan: { photos: 0, editing: '', delivery: 0, price: 0 } };

  return (
    <div className="Checkout">
      <Header />
      <div className="checkout-content">
        <h2>Podsumowanie</h2>
        <p>Liczba Zdjęć: {customPlan.photos}</p>
        <p>Poziom Edycji: {customPlan.editing}</p>
        <p>Czas Realizacji: {customPlan.delivery} dni</p>
        <p>Cena Końcowa: {customPlan.price} PLN</p>
      </div>
    </div>
  );
}

export default Checkout;
