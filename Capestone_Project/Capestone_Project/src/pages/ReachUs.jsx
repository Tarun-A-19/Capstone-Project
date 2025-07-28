import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // To pre-fill user info if logged in

function ReachUs() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user ? user.fullName : '',
    email: user ? user.email : '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to a backend endpoint
    console.log('Contact Form Submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ ...formData, message: '' });
  };

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
    },
    subheading: {
      textAlign: 'center',
      fontSize: '1.2rem',
      color: '#6c757d',
      marginBottom: '60px',
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '40px',
      alignItems: 'start',
    },
    contactInfo: {
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    },
    contactForm: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '25px',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '20px',
    },
    infoIcon: {
      fontSize: '1.5rem',
      color: '#007bff',
    },
    infoText: {
      fontSize: '1rem',
      color: '#495057',
    },
    formGroup: {
      marginBottom: '25px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #dee2e6',
      borderRadius: '8px',
      fontSize: '1rem',
      boxSizing: 'border-box',
    },
    textarea: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #dee2e6',
      borderRadius: '8px',
      fontSize: '1rem',
      boxSizing: 'border-box',
      minHeight: '120px',
      resize: 'vertical',
    },
    button: {
      width: '100%',
      padding: '15px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
    },
    mapContainer: {
        marginTop: '60px',
        textAlign: 'center',
    },
    mapImage: {
        maxWidth: '100%',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>Get in Touch</h1>
      <p style={styles.subheading}>Have a question or need assistance? We're here to help.</p>

      <div style={styles.container}>
        <div style={styles.contactInfo}>
          <h2 style={styles.sectionTitle}>Contact Information</h2>
          <div style={styles.infoItem}>
            <span style={styles.infoIcon}>📍</span>
            <span style={styles.infoText}>123 SnapRent Lane, Koramangala, Bengaluru, Karnataka 560034</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.infoIcon}>📞</span>
            <span style={styles.infoText}>+91 98765 43210</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.infoIcon}>✉️</span>
            <span style={styles.infoText}>support@snaprent.com</span>
          </div>
        </div>

        <div style={styles.contactForm}>
          <h2 style={styles.sectionTitle}>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} style={styles.input} required />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} style={styles.input} required />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Your Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} style={styles.textarea} required />
            </div>
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </div>
      </div>
      
      <div style={styles.mapContainer}>
        <h2 style={styles.sectionTitle}>Our Location</h2>
        <img src="https://placehold.co/1200x400/E9E9E9/757575?text=Bengaluru+Map+Placeholder" alt="Map of Bengaluru" style={styles.mapImage} />
      </div>
    </div>
  );
}
export default ReachUs;