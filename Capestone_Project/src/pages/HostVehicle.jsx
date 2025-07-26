import React from 'react';

// --- Styles ---
const hostStyles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    padding: '50px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  formContainer: {
    width: '100%',
    maxWidth: '600px',
    padding: '40px',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
  },
  input: {
    width: 'calc(100% - 24px)',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
  }
};

// --- Component ---
function HostVehicle() {
  return (
    <div style={hostStyles.page}>
      <div style={hostStyles.formContainer}>
        <h1 style={hostStyles.title}>Host Your Vehicle</h1>
        <p style={{textAlign: 'center', marginTop: '-20px', marginBottom: '30px'}}>Earn money by sharing your vehicle with our community.</p>
        <form>
          <div style={hostStyles.formGroup}>
            <label style={hostStyles.label}>Full Name</label>
            <input type="text" style={hostStyles.input} placeholder="Enter your name" />
          </div>
          <div style={hostStyles.formGroup}>
            <label style={hostStyles.label}>Vehicle Type (Car, Bike, etc.)</label>
            <input type="text" style={hostStyles.input} placeholder="e.g., SUV" />
          </div>
          <div style={hostStyles.formGroup}>
            <label style={hostStyles.label}>Vehicle Model</label>
            <input type="text" style={hostStyles.input} placeholder="e.g., Toyota Fortuner" />
          </div>
          <div style={hostStyles.formGroup}>
            <label style={hostStyles.label}>Rental Price per Day (in ₹)</label>
            <input type="number" style={hostStyles.input} placeholder="e.g., 3000" />
          </div>
          <button type="submit" style={hostStyles.button}>List My Vehicle</button>
        </form>
      </div>
    </div>
  );
}

export default HostVehicle;