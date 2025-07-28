import React, { useState } from 'react';

// --- Combined Sample Data ---
const vehicleData = [
  { id: 1, type: 'Car', name: 'SUV Compact', price: '₹3000/day', image: 'https://placehold.co/400x300/E9E9E9/757575?text=SUV' },
  { id: 2, type: 'Bike', name: 'Cruiser Motorcycle', price: '₹2000/day', image: 'https://placehold.co/400x300/E9E9E9/757575?text=Cruiser' },
  { id: 3, type: 'Car', name: 'Sedan Premium', price: '₹4500/day', image: 'https://placehold.co/400x300/E9E9E9/757575?text=Sedan' },
  { id: 4, type: 'Bike', name: 'Sports Bike', price: '₹3500/day', image: 'https://placehold.co/400x300/E9E9E9/757575?text=Sports+Bike' },
  { id: 5, type: 'Car', name: 'Hatchback', price: '₹2200/day', image: 'https://placehold.co/400x300/E9E9E9/757575?text=Hatchback' },
  { id: 6, type: 'Bike', name: 'Electric Scooter', price: '₹500/day', image: 'https://placehold.co/400x300/E9E9E9/757575?text=Scooter' },
];

function Vehicles() {
  const [filter, setFilter] = useState('All'); // State to manage the filter

  const filteredVehicles = vehicleData.filter(vehicle => {
    if (filter === 'All') return true;
    return vehicle.type === filter;
  });

  const styles = {
    page: { maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', paddingTop: '120px' },
    title: { textAlign: 'center', fontSize: '2.5rem', fontWeight: '600', marginBottom: '20px' },
    filterContainer: { display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '50px' },
    filterButton: (isActive) => ({
        padding: '10px 25px',
        fontSize: '1rem',
        cursor: 'pointer',
        borderRadius: '50px',
        border: '1px solid #007bff',
        backgroundColor: isActive ? '#007bff' : 'transparent',
        color: isActive ? '#fff' : '#007bff',
        fontWeight: '500',
    }),
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' },
    card: { backgroundColor: '#ffffff', border: '1px solid #dee2e6', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' },
    cardHover: { transform: 'translateY(-5px)', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' },
    cardImage: { width: '100%', height: '200px', objectFit: 'cover' },
    cardContent: { padding: '20px' },
    cardTitle: { fontSize: '1.25rem', fontWeight: '600', margin: '0 0 10px 0' },
    cardPrice: { fontSize: '1.1rem', fontWeight: '500', color: '#007bff', marginBottom: '20px' },
    rentButton: { width: '100%', padding: '12px', backgroundColor: '#28a745', color: '#fff', textAlign: 'center', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', fontSize: '1rem' }
  };

  function VehicleCard({ vehicle }) {
    const [isHovered, setIsHovered] = useState(false);
    const currentStyle = isHovered ? { ...styles.card, ...styles.cardHover } : styles.card;
    return (
      <div style={currentStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={vehicle.image} alt={vehicle.name} style={styles.cardImage} />
        <div style={styles.cardContent}>
          <h3 style={styles.cardTitle}>{vehicle.name}</h3>
          <p style={styles.cardPrice}>{vehicle.price}</p>
          <button style={styles.rentButton}>Rent Now</button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Explore Our Fleet</h1>
      <div style={styles.filterContainer}>
        <button onClick={() => setFilter('All')} style={styles.filterButton(filter === 'All')}>All</button>
        <button onClick={() => setFilter('Car')} style={styles.filterButton(filter === 'Car')}>Cars 🚗</button>
        <button onClick={() => setFilter('Bike')} style={styles.filterButton(filter === 'Bike')}>Bikes 🏍️</button>
      </div>
      <div style={styles.grid}>
        {filteredVehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}
      </div>
    </div>
  );
}

export default Vehicles;