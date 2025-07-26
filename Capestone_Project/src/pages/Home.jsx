import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // All styles are defined in one place for consistency
  const styles = {
    colors: {
      primary: '#007bff',
      surface: '#ffffff',
      text: '#212529',
      textMuted: '#6c757d',
    },
    hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '120px 20px',
      paddingTop: '180px',
      background: 'linear-gradient(135deg, #eaf2ff 0%, #ffffff 100%)',
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
      fontWeight: '700',
      margin: '0 0 15px 0',
    },
    heroSubtitle: {
      fontSize: '1.1rem',
      color: '#6c757d',
      marginBottom: '40px',
      maxWidth: '600px',
    },
    ctaButton: {
      padding: '15px 35px',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#fff',
      backgroundColor: '#007bff',
      textDecoration: 'none',
      borderRadius: '50px',
      boxShadow: '0 4px 15px rgba(0, 123, 255, 0.2)',
    },
    howItWorks: {
      padding: '80px 20px',
      backgroundColor: '#ffffff',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '600',
      marginBottom: '60px',
    },
    stepsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      flexWrap: 'wrap',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    step: {
      flex: '1',
      minWidth: '280px',
      maxWidth: '320px',
      textAlign: 'center',
    },
    stepIcon: {
      fontSize: '3rem',
      color: '#007bff',
      marginBottom: '20px',
    },
    stepTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '10px',
    },
  };

  return (
    <div>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Your Adventure Awaits</h1>
        <p style={styles.heroSubtitle}>Rent the perfect car or bike for your next journey with seamless, secure booking.</p>
        <Link to="/cars" style={styles.ctaButton}>Explore Vehicles</Link>
      </section>
      <section style={styles.howItWorks}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.stepsContainer}>
          <div style={styles.step}>
            <div style={styles.stepIcon}>🔎</div>
            <h3 style={styles.stepTitle}>1. Search & Discover</h3>
            <p style={{ color: styles.colors.textMuted }}>Find the perfect vehicle from our wide selection.</p>
          </div>
          <div style={styles.step}>
            <div style={styles.stepIcon}>📅</div>
            <h3 style={styles.stepTitle}>2. Book Securely</h3>
            <p style={{ color: styles.colors.textMuted }}>Select your dates and book in minutes.</p>
          </div>
          <div style={styles.step}>
            <div style={styles.stepIcon}>🚀</div>
            <h3 style={styles.stepTitle}>3. Ride & Enjoy</h3>
            <p style={{ color: styles.colors.textMuted }}>Pick up your vehicle and start your adventure.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;