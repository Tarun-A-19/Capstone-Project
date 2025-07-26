// src/pages/Cars.jsx
import React, { useState } from 'react';

function Cars() {
  // Styles are self-contained in this component
  const styles = {
    page: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      paddingTop: '120px', // For fixed navbar
    },
    title: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '600',
      marginBottom: '50px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px',
    },
    card: {
      backgroundColor: '#ffffff',
      border: '1px solid #dee2e6',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    cardContent: {
      padding: '20px',
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      margin: '0 0 10px 0',
    },
    cardPrice: {
      fontSize: '1.1rem',
      fontWeight: '500',
      color: '#007bff', // Primary color
      marginBottom: '20px',
    },
    rentButton: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#28a745', // Secondary color
      color: '#fff',
      textAlign: 'center',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '1rem',
    }
  };

  const carData = [
      { id: 1, name: 'SUV Compact', price: '₹3000/day', image: 'https://via.placeholder.com/400x300.png/ddd/000?text=SUV' },
      { id: 2, name: 'Sedan Premium', price: '₹4500/day', image: 'https://via.placeholder.com/400x300.png/ddd/000?text=Sedan' },
      { id: 3, name: 'Hatchback', price: '₹2200/day', image: 'https://via.placeholder.com/400x300.png/ddd/000?text=Hatchback' },
      { id: 4, name: 'Luxury Convertible', price: '₹8000/day', image: 'https://via.placeholder.com/400x300.png/ddd/000?text=Luxury' },
  ];

  // A small component for the card to handle its own hover state
  function CarCard({ car }) {
    const [isHovered, setIsHovered] = useState(false);
    const currentStyle = isHovered ? { ...styles.card, ...styles.cardHover } : styles.card;

    return (
      <div
        style={currentStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={car.image} alt={car.name} style={styles.cardImage} />
        <div style={styles.cardContent}>
          <h3 style={styles.cardTitle}>{car.name}</h3>
          <p style={styles.cardPrice}>{car.price}</p>
          <button style={styles.rentButton}>Rent Now</button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Find Your Perfect Car 🚗</h1>
      <div style={styles.grid}>
        {carData.map(car => <CarCard key={car.id} car={car} />)}
      </div>
    </div>
  );
}

export default Cars;