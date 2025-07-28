import React, { useState } from 'react';

// Sample data for destinations - you can expand this list
const destinationData = [
  {
    id: 1,
    name: 'Coorg, Karnataka',
    description: 'Known as the "Scotland of India," Coorg is a paradise for nature lovers, famous for its coffee plantations, misty hills, and stunning waterfalls.',
    activities: 'Trekking, Coffee Plantation Tours, Waterfall Visits',
    image: 'https://placehold.co/600x400/5A9A78/FFFFFF?text=Coorg'
  },
  {
    id: 2,
    name: 'Goa',
    description: 'Ride along scenic coastal roads, explore historic churches, and relax on world-famous beaches. Goa is the perfect destination for a bike trip.',
    activities: 'Beach Hopping, Water Sports, Exploring Old Goa',
    image: 'https://placehold.co/600x400/F4B400/FFFFFF?text=Goa'
  },
  {
    id: 3,
    name: 'Munnar, Kerala',
    description: 'Drive through winding roads surrounded by lush green tea gardens. Munnar offers breathtaking views and a tranquil atmosphere.',
    activities: 'Tea Garden Visits, Hiking to Anamudi Peak, Boating',
    image: 'https://placehold.co/600x400/0F9D58/FFFFFF?text=Munnar'
  },
  {
    id: 4,
    name: 'Hampi, Karnataka',
    description: 'Explore the ancient ruins of the Vijayanagara Empire. A car or bike is essential to navigate the vast, boulder-strewn landscape.',
    activities: 'Temple Exploration, Coracle Rides, Bouldering',
    image: 'https://placehold.co/600x400/DB4437/FFFFFF?text=Hampi'
  },
];

function Destinations() {
  const styles = {
    page: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      paddingTop: '120px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    header: {
      textAlign: 'center',
      fontSize: '2.8rem',
      fontWeight: '700',
      marginBottom: '15px',
      color: '#212529',
    },
    subheading: {
      textAlign: 'center',
      fontSize: '1.2rem',
      color: '#6c757d',
      marginBottom: '60px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
    },
    cardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
    },
    cardImage: {
      width: '100%',
      height: '220px',
      objectFit: 'cover',
    },
    cardContent: {
      padding: '25px',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      margin: '0 0 10px 0',
    },
    cardDescription: {
      fontSize: '1rem',
      color: '#495057',
      lineHeight: '1.6',
      flexGrow: 1,
    },
    cardActivities: {
      marginTop: '20px',
      fontSize: '0.9rem',
      color: '#007bff',
      fontWeight: '500',
    },
  };

  function DestinationCard({ destination }) {
    const [isHovered, setIsHovered] = useState(false);
    const currentStyle = isHovered ? { ...styles.card, ...styles.cardHover } : styles.card;

    return (
      <div
        style={currentStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={destination.image} alt={destination.name} style={styles.cardImage} />
        <div style={styles.cardContent}>
          <h2 style={styles.cardTitle}>{destination.name}</h2>
          <p style={styles.cardDescription}>{destination.description}</p>
          <p style={styles.cardActivities}><strong>Suggested Activities:</strong> {destination.activities}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>Popular Destinations</h1>
      <p style={styles.subheading}>Discover your next adventure. Grab a SnapRent vehicle and hit the road!</p>
      <div style={styles.grid}>
        {destinationData.map(dest => <DestinationCard key={dest.id} destination={dest} />)}
      </div>
    </div>
  );
}
export default Destinations;