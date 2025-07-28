// src/components/Navbar.jsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Navbar({ toggleSidebar }) {
  const { user } = useAuth();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    navbar: {
      position: 'fixed', top: 0, left: 0, width: '100%', display: 'flex',
      justifyContent: 'center', padding: '15px 0',
      zIndex: 900, boxSizing: 'border-box',
      transition: 'background-color 0.4s ease-out, backdrop-filter 0.4s ease-out',
      
      // --- THE FIX IS HERE ---
      // Increased background opacity for better text visibility when scrolled.
      backgroundColor: isScrolled || !isHomePage ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
      backdropFilter: isScrolled || !isHomePage ? 'blur(8px)' : 'none',
      WebkitBackdropFilter: isScrolled || !isHomePage ? 'blur(8px)' : 'none',
      borderBottom: isScrolled || !isHomePage ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
    },
    container: { width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' },
    navLinksContainer: { display: 'flex', alignItems: 'center', gap: '25px' },
    navLink: (isActive) => ({
      textDecoration: 'none',
      // This logic correctly changes text to dark when scrolled.
      color: isActive ? '#007bff' : (isHomePage && !isScrolled ? '#fff' : '#343a40'),
      fontWeight: isActive ? 'bold' : 'normal',
    }),
    rightSection: { display: 'flex', alignItems: 'center', gap: '15px' },
    authButton: {
      padding: '8px 20px', border: `1px solid ${(isHomePage && !isScrolled) ? '#fff' : '#007bff'}`,
      borderRadius: '20px', backgroundColor: (isHomePage && !isScrolled) ? 'transparent' : '#007bff',
      color: '#fff', cursor: 'pointer', textDecoration: 'none',
    },
    hamburger: {
      background: 'none', border: 'none', cursor: 'pointer',
      color: (isHomePage && !isScrolled) ? '#fff' : '#343a40', 
      fontSize: '28px',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Left side items */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
          <button onClick={toggleSidebar} style={styles.hamburger}>☰</button>
          
          <div style={styles.navLinksContainer}>
            <NavLink to="/" style={({ isActive }) => styles.navLink(isActive)} end>Home</NavLink>
            <NavLink to="/vehicles" style={({ isActive }) => styles.navLink(isActive)}>Rent</NavLink>
            <NavLink to="/destinations" style={({ isActive }) => styles.navLink(isActive)}>Destinations</NavLink>
            <NavLink to="/host-vehicle" style={({ isActive }) => styles.navLink(isActive)}>Host Your Car</NavLink>
          </div>
        </div>

        {/* Right side items */}
        <div style={styles.rightSection}>
          {user ? (
            <span style={{color: (isHomePage && !isScrolled) ? '#fff' : '#343a40'}}>Hello, {user.fullName}</span>
          ) : (
            <NavLink to="/login" style={styles.authButton}>Login</NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}