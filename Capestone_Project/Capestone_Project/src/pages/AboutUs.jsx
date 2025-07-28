import React from 'react';

function AboutUs() {
  const styles = {
    page: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px 20px',
      paddingTop: '120px', // For fixed navbar
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      lineHeight: '1.7',
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
    section: {
      marginBottom: '50px',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      fontWeight: '600',
      color: '#007bff',
      marginBottom: '20px',
      borderBottom: '2px solid #e9ecef',
      paddingBottom: '10px',
    },
    paragraph: {
      fontSize: '1rem',
      color: '#495057',
    },
    cardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '25px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    },
    cardTitle: {
        fontSize: '1.2rem',
        fontWeight: '600',
        marginBottom: '10px',
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>About SnapRent</h1>
      <p style={styles.subheading}>Your trusted partner for seamless and memorable road adventures.</p>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.paragraph}>
          At SnapRent, our mission is to make mobility simple, accessible, and enjoyable for everyone. We believe that the freedom to explore should be just a few clicks away. We are dedicated to providing a diverse fleet of reliable vehicles, transparent pricing, and exceptional customer service to ensure your journey is as smooth as your ride.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={styles.paragraph}>
          Founded by a group of passionate travelers, SnapRent was born from a simple idea: renting a car or bike should be an easy and exciting part of your travel plans, not a complicated chore. Frustrated by hidden fees, lengthy paperwork, and unreliable service, we set out to build a platform that we would want to use ourselves. Today, SnapRent is a thriving community of renters and vehicle hosts, all connected by a shared love for the open road.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <div style={styles.cardContainer}>
            <div style={styles.card}>
                <h3 style={styles.cardTitle}>Wide Selection</h3>
                <p style={styles.paragraph}>From compact cars for city trips to rugged SUVs and stylish bikes for scenic routes, our diverse fleet has the perfect vehicle for any occasion.</p>
            </div>
            <div style={styles.card}>
                <h3 style={styles.cardTitle}>Transparent Pricing</h3>
                <p style={styles.paragraph}>No hidden fees, no last-minute surprises. The price you see is the price you pay. We believe in honest and upfront communication.</p>
            </div>
            <div style={styles.card}>
                <h3 style={styles.cardTitle}>24/7 Support</h3>
                <p style={styles.paragraph}>Our dedicated support team is always here to help, day or night. Whether you have a question or need assistance on the road, we've got your back.</p>
            </div>
        </div>
      </section>
    </div>
  );
}
export default AboutUs;