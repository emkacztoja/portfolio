import React, { useState } from 'react';
import './styling/Portfolio.css';
import Header from './Header';

const photos = [
  { src: 'https://code.emkacz.pl/websitephotos/bmw4.jpg', alt: 'BMW X3M Competition', description: 'BMW X3M Competition 2024', brand: 'BMW', model: 'X3M', year: '2024' },
  { src: 'https://code.emkacz.pl/websitephotos/bmw2.jpg', alt: 'BMW X3M Competition', description: 'BMW X3M Competition 2024', brand: 'BMW', model: 'X3M', year: '2024' },
  { src: 'https://code.emkacz.pl/websitephotos/bmw3.jpg', alt: 'BMW X3M Competition', description: 'BMW X3M Competition 2024', brand: 'BMW', model: 'X3M', year: '2024' },
  { src: 'https://code.emkacz.pl/websitephotos/bmw7.jpg', alt: 'BMW X3M Competition', description: 'BMW X3M Competition 2024', brand: 'BMW', model: 'X3M', year: '2024' },
  { src: 'https://code.emkacz.pl/websitephotos/bmw5.jpg', alt: 'BMW X3M Competition', description: 'BMW X3M Competition 2024', brand: 'BMW', model: 'X3M', year: '2024' },
  { src: 'https://code.emkacz.pl/websitephotos/bmw1.jpg', alt: 'BMW X3M Competition', description: 'BMW X3M Competition 2024', brand: 'BMW', model: 'X3M', year: '2024' },
  { src: 'https://code.emkacz.pl/websitephotos/bmw6.jpg', alt: 'BMW M3 Competition', description: 'BMW M3 Competition 2024', brand: 'BMW', model: 'M3', year: '2024' },
  { src: 'https://code.emkacz.pl/websitephotos/A45s.jpg', alt: 'Mercedes A45S', description: 'Mercedes A45S 2023', brand: 'Mercedes', model: 'A45S', year: '2023' },
  { src: 'https://code.emkacz.pl/websitephotos/AudiTT.jpg', alt: 'Audi TT', description: 'Audi TT 2024', brand: 'Audi', model: 'TT', year: '2024' },
  { src: 'https://code.emkacz.pl/websitephotos/Huracan.jpg', alt: 'Lamborghini Huracan', description: 'Lamborghini Huracan 2024', brand: 'Lamborghini', model: 'Huracan', year: '2024' },
  { src: 'https://code.emkacz.pl/websitephotos/Huracan2.jpg', alt: 'Lamborghini Huracan', description: 'Lamborghini Huracan 2024', brand: 'Lamborghini', model: 'Huracan', year: '2024' },
  { src: 'https://code.emkacz.pl/websitephotos/Mustang.jpg', alt: 'Ford Mustang', description: 'Ford Mustang 2023', brand: 'Ford', model: 'Mustang', year: '2023' },
  { src: 'https://code.emkacz.pl/websitephotos/Urus.jpg', alt: 'Lamborghini Urus', description: 'Lamborghini Urus 2023', brand: 'Lamborghini', model: 'Urus', year: '2023' },
];

function Portfolio() {
  const [modalImage, setModalImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialImage, setSpecialImage] = useState(false);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === 'skarpeta') {
      setSpecialImage(true);
    } else {
      setSpecialImage(false);
    }
  };

  const filteredPhotos = photos.filter(photo =>
    photo.brand.toLowerCase().includes(searchTerm) ||
    photo.model.toLowerCase().includes(searchTerm) ||
    photo.year.includes(searchTerm)
  );

  return (
    <div className="Portfolio">
      <Header />
      <div className="portfolio-content">
        <h2>Moje Portfolio</h2>
        <input
          type="text"
          placeholder="Szukaj po marce, modelu, roku..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <div className="photo-grid">
          {specialImage ? (
            <div
              className="photo"
              onClick={() => openModal('https://code.emkacz.pl/websitephotos/special.jpg')}
              style={{ backgroundImage: 'url(https://code.emkacz.pl/websitephotos/special.jpg)' }}
            >
              <div className="overlay">sYrEnA r20 bOsTo</div>
            </div>
          ) : (
            filteredPhotos.map(photo => (
              <div
                className="photo"
                key={photo.src}
                onClick={() => openModal(photo.src)}
                style={{ backgroundImage: `url(${photo.src})` }}
              >
                <div className="overlay">{photo.description}</div>
              </div>
            ))
          )}
        </div>
      </div>
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Enlarged" />
        </div>
      )}
    </div>
  );
}

export default Portfolio;
