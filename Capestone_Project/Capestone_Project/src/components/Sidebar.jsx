import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// --- SVG Icon Components ---
const ProfileIcon = ({ color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const BookingsIcon = ({ color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const LogoutIcon = ({ color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
);


export default function Sidebar() {
  const { user, logout } = useAuth();

  const styles = {
    sidebar: {
      width: '280px',
      backgroundColor: '#212529',
      color: '#adb5bd',
      padding: '20px',
      height: 'calc(100vh - 75px)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    nav: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px', // Tighter spacing
    },
    link: {
      textDecoration: 'none',
      color: '#adb5bd',
      padding: '12px 15px',
      borderRadius: '8px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '15px', // Space between icon and text
      transition: 'background-color 0.2s, color 0.2s',
    },
    activeLink: {
      backgroundColor: '#0d6efd',
      color: '#ffffff',
    },
    profileSectionBottom: {
      marginTop: 'auto',
      paddingTop: '20px',
      borderTop: '1px solid #495057',
    },
    profileButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: 'none',
      border: 'none',
      color: '#fff',
      width: '100%',
      padding: '10px',
      borderRadius: '8px',
      cursor: 'pointer',
      textAlign: 'left',
    },
    profileAvatar: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: '#0d6efd',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        flexShrink: 0,
    },
    profileName: {
        fontWeight: '500',
        fontSize: '1rem',
    },
    logoutButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
      marginTop: '10px'
    }
  };

  const initials = user ? user.fullName.split(' ').map(n => n[0]).join('').toUpperCase() : 'G';

  return (
    <div style={styles.sidebar}>
      <nav style={styles.nav}>
        <NavLink 
          to="/profile" 
          style={({isActive}) => isActive ? {...styles.link, ...styles.activeLink} : styles.link}
        >
          <ProfileIcon />
          <span>My Profile</span>
        </NavLink>
        <NavLink 
          to="/bookings" 
          style={({isActive}) => isActive ? {...styles.link, ...styles.activeLink} : styles.link}
        >
          <BookingsIcon />
          <span>My Bookings</span>
        </NavLink>
      </nav>

      <div style={styles.profileSectionBottom}>
          <button style={styles.profileButton}>
              <div style={styles.profileAvatar}>{initials}</div>
              <span style={styles.profileName}>{user ? user.fullName : 'Guest'}</span>
          </button>
           <button onClick={logout} style={{...styles.link, ...styles.logoutButton}}>
              <LogoutIcon />
              <span>Logout</span>
          </button>
      </div>
    </div>
  );
}
