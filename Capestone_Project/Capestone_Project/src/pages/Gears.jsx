import React from 'react';

// --- Styles ---
const gearStyles = {
  page: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '30px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  cardImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    backgroundColor: '#eee',
  },
  cardContent: {
    padding: '20px',
  },
  cardTitle: {
    fontSize: '20px',
    margin: '0 0 10px 0',
  },
  cardPrice: {
    fontSize: '16px',
    color: '#007bff',
  },
};

// --- Sample Data ---
const gearData = [
  { id: 1, name: 'Riding Helmet', price: '₹250/day', image: 'https://via.placeholder.com/300x250.png/ddd/000?text=Helmet' },
  { id: 2, name: 'Riding Jacket', price: '₹400/day', image: 'https://via.placeholder.com/300x250.png/ddd/000?text=Jacket' },
  { id: 3, name: 'Gloves', price: '₹100/day', image: 'https://via.placeholder.com/300x250.png/ddd/000?text=Gloves' },
  { id: 4, name: 'GPS Navigator', price: '₹300/day', image: 'https://via.placeholder.com/300x250.png/ddd/000?text=GPS' },
];

// --- Component ---
function Gears() {
  return (
    <div style={gearStyles.page}>
      <h1 style={gearStyles.title}>Gears & Accessories ⚙️</h1>
      <div style={gearStyles.grid}>
        {gearData.map(gear => (
          <div key={gear.id} style={gearStyles.card}>
            <img src={gear.image} alt={gear.name} style={gearStyles.cardImage} />
            <div style={gearStyles.cardContent}>
              <h3 style={gearStyles.cardTitle}>{gear.name}</h3>
              <p style={gearStyles.cardPrice}>{gear.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gears;