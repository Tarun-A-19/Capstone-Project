import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // To pre-fill user info if logged in

function Feedback() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user ? user.fullName : '',
    email: user ? user.email : '',
    rating: 0,
    message: '',
  });
  const [hoverRating, setHoverRating] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend endpoint
    console.log('Feedback Submitted:', formData);
    alert('Thank you for your feedback!');
    // Reset form
    setFormData({ name: '', email: '', rating: 0, message: '' });
  };

  const styles = {
    page: {
      maxWidth: '700px',
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
      marginBottom: '50px',
    },
    form: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    },
    formGroup: {
      marginBottom: '25px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '500',
      color: '#343a40',
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
    starContainer: {
      display: 'flex',
      gap: '5px',
    },
    star: {
      fontSize: '2.5rem',
      cursor: 'pointer',
      color: '#e4e5e9',
    },
    starFilled: {
      color: '#ffc107',
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
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>Share Your Feedback</h1>
      <p style={styles.subheading}>We value your opinion and use it to improve our service.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Overall Rating</label>
          <div style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={
                  star <= (hoverRating || formData.rating)
                    ? { ...styles.star, ...styles.starFilled }
                    : styles.star
                }
                onClick={() => setFormData({ ...formData, rating: star })}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={styles.textarea}
            placeholder="Tell us about your experience..."
            required
          />
        </div>
        <button type="submit" style={styles.button}>Submit Feedback</button>
      </form>
    </div>
  );
}
export default Feedback;