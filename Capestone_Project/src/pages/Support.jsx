import React from 'react';

// --- Styles ---
const supportStyles = {
  page: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '24px',
    borderBottom: '2px solid #eee',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  faqItem: {
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  faqQuestion: {
    width: '100%',
    padding: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: '#f7f7f7',
    border: 'none',
    textAlign: 'left',
  },
  faqAnswer: {
    padding: '15px',
    backgroundColor: 'white',
    lineHeight: '1.6',
  }
};

// --- Component ---
function Support() {
  return (
    <div style={supportStyles.page}>
      <h1 style={supportStyles.title}>Support Center</h1>
      
      <section>
        <h2 style={supportStyles.sectionTitle}>Frequently Asked Questions</h2>
        <div style={supportStyles.faqItem}>
          <details>
            <summary style={supportStyles.faqQuestion}>What documents are required for renting?</summary>
            <p style={supportStyles.faqAnswer}>You will need a valid driver's license, Aadhar card, and a credit card for the security deposit.</p>
          </details>
        </div>
        <div style={supportStyles.faqItem}>
          <details>
            <summary style={supportStyles.faqQuestion}>Is there a mileage limit?</summary>
            <p style={supportStyles.faqAnswer}>Most of our rentals come with unlimited mileage. Please check the specific vehicle's policy before booking.</p>
          </details>
        </div>
        <div style={supportStyles.faqItem}>
          <details>
            <summary style={supportStyles.faqQuestion}>How do I cancel a booking?</summary>
            <p style={supportStyles.faqAnswer}>You can cancel your booking from your profile page up to 24 hours before the pickup time for a full refund.</p>
          </details>
        </div>
      </section>
    </div>
  );
}

export default Support;