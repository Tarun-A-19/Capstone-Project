import React from 'react';
import { useAuth } from '../context/AuthContext'; // Import the hook to get user data

function Profile() {
  const { user } = useAuth(); // Get the currently logged-in user

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
    profileContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '25px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    },
    cardHeader: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '20px',
    },
    profileInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '20px',
    },
    avatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundColor: '#007bff',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2.5rem',
      fontWeight: 'bold',
    },
    userName: {
      fontSize: '1.5rem',
      fontWeight: '600',
      margin: 0,
    },
    userEmail: {
      color: '#6c757d',
      margin: '5px 0 0 0',
    },
    detailItem: {
      marginBottom: '15px',
    },
    detailLabel: {
      fontWeight: '600',
      color: '#343a40',
      display: 'block',
    },
    detailValue: {
      color: '#6c757d',
    },
    editButton: {
        backgroundColor: 'transparent',
        border: '1px solid #007bff',
        color: '#007bff',
        padding: '8px 16px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '500',
        marginTop: '20px',
    }
  };

  // Handle case where user data might not be loaded yet
  if (!user) {
    return <div>Loading profile...</div>;
  }

  // Get the user's initials for the avatar
  const initials = user.fullName.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>My Profile</h1>
      
      <div style={styles.profileContainer}>
        <div style={styles.card}>
            <div style={styles.profileInfo}>
                <div style={styles.avatar}>{initials}</div>
                <div>
                    <h2 style={styles.userName}>{user.fullName}</h2>
                    <p style={styles.userEmail}>{user.email}</p>
                </div>
            </div>
        </div>

        <div style={styles.card}>
            <h3 style={styles.cardHeader}>Personal Details</h3>
            <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Phone Number</span>
                <span style={styles.detailValue}>+91 XXXXX XXXXX</span> {/* Placeholder */}
            </div>
            <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Date of Birth</span>
                <span style={styles.detailValue}>XX / XX / XXXX</span> {/* Placeholder */}
            </div>
             <button style={styles.editButton}>Edit Details</button>
        </div>

        <div style={styles.card}>
            <h3 style={styles.cardHeader}>Account Settings</h3>
             <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Password</span>
                <span style={styles.detailValue}>********</span>
            </div>
            <button style={styles.editButton}>Change Password</button>
        </div>
      </div>
    </div>
  );
}
export default Profile;