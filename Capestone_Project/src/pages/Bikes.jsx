import React from 'react';

// --- Styles ---
const bikeStyles = {
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    backgroundColor: '#eee',
  },
  cardContent: {
    padding: '20px',
  },
  cardTitle: {
    fontSize: '22px',
    margin: '0 0 10px 0',
  },
  cardPrice: {
    fontSize: '18px',
    color: '#007bff',
    marginBottom: '15px',
  },
  rentButton: {
    display: 'block',
    width: '100%',
    padding: '12px',
    backgroundColor: '#28a745',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

// --- Sample Data ---
const bikeData = [
  { id: 1, name: 'Mountain Bike', price: '₹800/day', image: 'https://via.placeholder.com/400x300.png/ddd/000?text=Mountain+Bike' },
  { id: 2, name: 'Cruiser Motorcycle', price: '₹2000/day', image: 'https://via.placeholder.com/400x300.png/ddd/000?text=Cruiser' },
  { id: 3, name: 'Sports Bike', price: '₹3500/day', image: 'https://via.placeholder.com/400x300.png/ddd/000?text=Sports+Bike' },
  { id: 4, name: 'Electric Scooter', price: '₹500/day', image: 'https://via.placeholder.com/400x300.png/ddd/000?text=Scooter' },
];

// --- Component ---
function Bikes() {
  return (
    <div style={bikeStyles.page}>
      <h1 style={bikeStyles.title}>Choose Your Ride 🏍️</h1>
      <div style={bikeStyles.grid}>
        {bikeData.map(bike => (
          <div key={bike.id} style={bikeStyles.card}>
            <img src={bike.image} alt={bike.name} style={bikeStyles.cardImage} />
            <div style={bikeStyles.cardContent}>
              <h3 style={bikeStyles.cardTitle}>{bike.name}</h3>
              <p style={bikeStyles.cardPrice}>{bike.price}</p>
              <button style={bikeStyles.rentButton}>Rent Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bikes;