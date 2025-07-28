import React from 'react';

function Terms() {
  const styles = {
    page: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px 20px',
      paddingTop: '120px', // For fixed navbar
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      lineHeight: '1.7',
      color: '#495057',
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
      fontSize: '1rem',
      color: '#6c757d',
      marginBottom: '60px',
    },
    section: {
      marginBottom: '40px',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#007bff',
      marginBottom: '20px',
      borderBottom: '2px solid #e9ecef',
      paddingBottom: '10px',
    },
    paragraph: {
      fontSize: '1rem',
      marginBottom: '15px',
    },
    list: {
        paddingLeft: '20px',
    },
    listItem: {
        marginBottom: '10px',
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>Terms and Conditions</h1>
      <p style={styles.subheading}>Last Updated: July 27, 2025</p>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>1. Introduction</h2>
        <p style={styles.paragraph}>
          Welcome to SnapRent. These terms and conditions outline the rules and regulations for the use of SnapRent's website and services. By accessing this website, we assume you accept these terms and conditions. Do not continue to use SnapRent if you do not agree to all of the terms and conditions stated on this page.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>2. User Eligibility and Accounts</h2>
        <p style={styles.paragraph}>
          You must be at least 18 years of age to use our services. By creating an account, you warrant that all information you provide is accurate, complete, and current at all times. You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>3. Booking and Payment</h2>
        <ul style={styles.list}>
            <li style={styles.listItem}>All bookings are subject to vehicle availability.</li>
            <li style={styles.listItem}>Full payment is required at the time of booking to confirm your reservation.</li>
            <li style={styles.listItem}>A security deposit may be required at the time of vehicle pickup, which is refundable upon the safe return of the vehicle.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>4. User Responsibilities</h2>
        <ul style={styles.list}>
            <li style={styles.listItem}>The renter must possess a valid driver's license for the type of vehicle being rented.</li>
            <li style={styles.listItem}>The vehicle must be returned in the same condition it was received, excluding normal wear and tear. The renter is responsible for any damage, loss, or theft of the vehicle.</li>
            <li style={styles.listItem}>Any traffic violations, fines, or penalties incurred during the rental period are the sole responsibility of the user.</li>
        </ul>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>5. Cancellation Policy</h2>
        <p style={styles.paragraph}>
          Cancellations made more than 48 hours before the scheduled pickup time will receive a full refund. Cancellations made within 48 hours of pickup are subject to a cancellation fee. No-shows will not be eligible for a refund.
        </p>
      </section>

    </div>
  );
}
export default Terms;