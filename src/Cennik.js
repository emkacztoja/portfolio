import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cennik.css';
import Header from './Header';

const predefinedPlans = [
  { name: 'Basic', price: 100, photos: 5, editing: 'Podstawowa edycja', delivery: 14 },
  { name: 'Standard', price: 200, photos: 10, editing: 'Zaawansowana edycja', delivery: 7 },
  { name: 'Premium', price: 300, photos: 20, editing: 'Profesjonalna edycja', delivery: 3 },
];

function Cennik() {
  const [photos, setPhotos] = useState(5);
  const [editing, setEditing] = useState('basic');
  const [delivery, setDelivery] = useState(3);
  const [price, setPrice] = useState(100);
  const navigate = useNavigate();

  useEffect(() => {
    calculatePrice();
  }, [photos, editing, delivery]);

  const calculatePrice = () => {
    if (photos < 1) {
      setPrice(0);
      return;
    }

    let newPrice = 0;
    if (editing === 'basic') {
      newPrice += photos * 20;
    } else if (editing === 'advanced') {
      newPrice += photos * 30;
    } else if (editing === 'professional') {
      newPrice += photos * 40;
    }

    if (delivery === 14) {
      newPrice += 0;
    } else if (delivery === 7) {
      newPrice += 50;
    } else if (delivery === 3) {
      newPrice += 100;
    }

    setPrice(newPrice);
  };

  const handleContinue = (plan) => {
    const selectedPlan = plan || {
      photos,
      editing: editing === 'basic' ? 'Podstawowa edycja' : editing === 'advanced' ? 'Zaawansowana edycja' : 'Profesjonalna edycja',
      delivery,
      price,
    };
    navigate('/checkout', { state: { customPlan: selectedPlan } });
  };

  return (
    <div className="Cennik">
      <Header />
      <div className="cennik-content">
        <h2>Cennik</h2>
        <div className="cennik-plans">
          {predefinedPlans.map((plan) => (
            <div className="plan" key={plan.name}>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price} PLN</p>
              <ul>
                <li>{plan.photos} zdjęć</li>
                <li>{plan.editing}</li>
                <li>Dostawa w {plan.delivery} dni</li>
              </ul>
              <button onClick={() => handleContinue(plan)}>Wybierz Plan</button>
            </div>
          ))}
        </div>

        <div className="custom-plan">
          <h3>Plan Dostosowany</h3>
          <div className="form-group">
            <label>Liczba zdjęć</label>
            <input
              type="number"
              value={photos}
              min="1"
              onChange={(e) => setPhotos(parseInt(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label>Poziom edycji</label>
            <select value={editing} onChange={(e) => setEditing(e.target.value)}>
              <option value="basic">Podstawowa edycja</option>
              <option value="advanced">Zaawansowana edycja</option>
              <option value="professional">Profesjonalna edycja</option>
            </select>
          </div>
          <div className="form-group">
            <label>Czas realizacji zamówienia</label>
            <select value={delivery} onChange={(e) => setDelivery(parseInt(e.target.value))}>
              <option value={14}>do 14 dni</option>
              <option value={7}>do 7 dni</option>
              <option value={3}>do 3 dni</option>
            </select>
          </div>
          <h4>Przybliżona cena: {price} PLN</h4>
          <button onClick={() => handleContinue(null)}>Kontynuuj z Planem Dostosowanym</button>
        </div>
      </div>
    </div>
  );
}

export default Cennik;
