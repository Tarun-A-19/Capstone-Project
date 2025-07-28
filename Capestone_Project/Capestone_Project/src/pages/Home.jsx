import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth to welcome the user
import bgVideo from '../assets/BG.mp4'; // 1. Import the video from the assets folder

function Home() {
  const { user } = useAuth(); // Get the logged-in user's data

  const styles = {
    hero: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      minHeight: '100vh',
      padding: '20px',
      boxSizing: 'border-box',
      color: '#fff',
      overflow: 'hidden',
      fontFamily: "'Poppins', sans-serif", // Added a professional font
    },
    videoBackground: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: 'translate(-50%, -50%)',
      zIndex: -2,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: -1,
    },
    heroContent: {
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: '80px', // FIX: Pushes content down from under the fixed navbar
    },
    welcomeMessage: {
        fontSize: '1.1rem',
        fontWeight: '500',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        padding: '8px 20px',
        borderRadius: '20px',
        marginBottom: '20px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    heroTitle: {
      fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
      fontWeight: '700',
      marginBottom: '15px',
      textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      maxWidth: '600px',
      marginBottom: '40px',
      textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
    },
    bookingForm: {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      padding: '30px',
      borderRadius: '12px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      alignItems: 'flex-end', // Aligns items to the bottom for a clean look
      justifyContent: 'center',
      width: '100%',
      maxWidth: '900px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    formGroup: {
      flex: '1 1 200px',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
    },
    label: {
      marginBottom: '8px',
      fontWeight: '500',
      fontSize: '0.9rem',
      color: '#e0e0e0', // Lighter color for better contrast
    },
    input: {
      padding: '15px',
      border: 'none', // Cleaner input look
      borderRadius: '8px',
      fontSize: '1rem',
      backgroundColor: '#f0f0f0', // Light background for readability
      color: '#333', // Dark text for inputs
    },
    searchButton: {
      padding: '15px 30px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      height: '54px',
    },
  };

  return (
    <div>
      <section style={styles.hero}>
        <div style={styles.overlay}></div>
        <video style={styles.videoBackground} autoPlay loop muted playsInline src={bgVideo} />
        
        <div style={styles.heroContent}>
            {user && <p style={styles.welcomeMessage}>Welcome back, {user.fullName}!</p>}
            
            <h1 style={styles.heroTitle}>DRIVE YOUR DREAMS</h1>
            <p style={styles.heroSubtitle}>Find and book the perfect rental car for your next adventure in minutes.</p>
            
            <div style={styles.bookingForm}>
              <div style={styles.formGroup}>
                <label htmlFor="location" style={styles.label}>Location</label>
                <input id="location" type="text" placeholder="e.g., Bengaluru" style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="startDate" style={styles.label}>Start Date</label>
                <input id="startDate" type="date" style={styles.input} />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="endDate" style={styles.label}>End Date</label>
                <input id="endDate" type="date" style={styles.input} />
              </div>
              <button style={styles.searchButton}>Search</button>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
