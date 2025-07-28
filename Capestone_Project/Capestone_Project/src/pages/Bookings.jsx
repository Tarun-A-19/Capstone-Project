import React from 'react';

// Sample data - in a real app, you would fetch this from your backend
const sampleBookings = [
  { 
    id: 1, 
    vehicleName: 'SUV Compact', 
    startDate: '2025-08-10', 
    endDate: '2025-08-15', 
    status: 'Upcoming',
    totalPrice: '₹15,000',
    image: 'https://placehold.co/400x300/E9E9E9/757575?text=SUV'
  },
  { 
    id: 2, 
    vehicleName: 'Cruiser Motorcycle', 
    startDate: '2025-07-20', 
    endDate: '2025-07-22', 
    status: 'Completed',
    totalPrice: '₹4,000',
    image: 'https://placehold.co/400x300/E9E9E9/757575?text=Cruiser'
  },
];

function Bookings() {
  const styles = {
    page: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    header: {
      fontSize: '2rem',
      fontWeight: '600',
      marginBottom: '30px',
      borderBottom: '1px solid #dee2e6',
      paddingBottom: '15px',
    },
    bookingList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    bookingCard: {
      display: 'flex',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      overflow: 'hidden',
    },
    cardImage: {
      width: '200px',
      height: '150px',
      objectFit: 'cover',
    },
    cardDetails: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    vehicleName: {
      fontSize: '1.2rem',
      fontWeight: '600',
      margin: '0 0 10px 0',
    },
    bookingInfo: {
      margin: '0 0 5px 0',
      color: '#6c757d',
    },
    statusBadge: (status) => ({
      padding: '4px 10px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: status === 'Upcoming' ? '#007bff' : '#28a745',
      width: 'fit-content',
      marginTop: '10px',
    }),
    noBookings: {
        textAlign: 'center',
        padding: '50px',
        color: '#6c757d',
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>My Bookings</h1>
      
      {sampleBookings.length > 0 ? (
        <div style={styles.bookingList}>
          {sampleBookings.map(booking => (
            <div key={booking.id} style={styles.bookingCard}>
              <img src={booking.image} alt={booking.vehicleName} style={styles.cardImage} />
              <div style={styles.cardDetails}>
                <h2 style={styles.vehicleName}>{booking.vehicleName}</h2>
                <p style={styles.bookingInfo}>
                  <strong>From:</strong> {new Date(booking.startDate).toLocaleDateString()} | <strong>To:</strong> {new Date(booking.endDate).toLocaleDateString()}
                </p>
                <p style={styles.bookingInfo}><strong>Total Price:</strong> {booking.totalPrice}</p>
                <span style={styles.statusBadge(booking.status)}>{booking.status}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.noBookings}>
            <h2>You have no bookings yet.</h2>
            <p>Start by renting a vehicle from our fleet!</p>
        </div>
      )}
    </div>
  );
}
export default Bookings;