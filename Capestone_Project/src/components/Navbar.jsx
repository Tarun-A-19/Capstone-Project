// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
};

function Navbar() {
  const [width] = useWindowSize();
  const isMobile = width < 992;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: '15px 0',
      backgroundColor: isScrolled ? '#343a40' : 'transparent',
      zIndex: 1000,
      transition: 'background-color 0.4s ease-out',
      boxSizing: 'border-box',
    },
    container: {
      width: '100%',
      maxWidth: '1200px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      boxSizing: 'border-box',
    },
    logo: {
      height: '40px',
    },
    navLinksContainer: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '25px',
    },
    mobileMenu: {
      display: isMobile && isMenuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '70px',
      left: 0,
      width: '100%',
      backgroundColor: '#343a40',
      padding: '20px',
      boxSizing: 'border-box',
      gap: '15px',
    },
    navLink: {
      textDecoration: 'none',
      color: isScrolled || isMenuOpen ? '#fff' : '#343a40',
      padding: '5px 0',
    },
    activeNavLink: {
      color: '#007bff',
      fontWeight: 'bold',
    },
    rightSection: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    searchInput: {
      padding: '8px 12px',
      borderRadius: '20px',
      border: `1px solid ${isScrolled ? '#ffffff4d' : '#ccc'}`,
      backgroundColor: isScrolled ? '#ffffff26' : '#fff',
      color: isScrolled ? '#fff' : '#333',
    },
    loginButton: {
      padding: '8px 20px',
      border: `1px solid ${isScrolled ? '#fff' : '#343a40'}`,
      borderRadius: '20px',
      backgroundColor: isLoginHovered ? (isScrolled ? '#fff' : '#343a40') : 'transparent',
      color: isLoginHovered ? (isScrolled ? '#343a40' : '#fff') : (isScrolled ? '#fff' : '#343a40'),
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
    hamburger: {
      display: isMobile ? 'block' : 'none',
      background: 'none',
      border: 'none',
      color: isScrolled ? '#fff' : '#343a40',
      fontSize: '28px',
      cursor: 'pointer',
    },
  };

  const NavLinks = () => (
    <>
      <NavLink to="/" style={({isActive}) => isActive ? {...styles.navLink, ...styles.activeNavLink} : styles.navLink} end>Home</NavLink>
      <NavLink to="/bikes" style={({isActive}) => isActive ? {...styles.navLink, ...styles.activeNavLink} : styles.navLink}>Bike</NavLink>
      <NavLink to="/cars" style={({isActive}) => isActive ? {...styles.navLink, ...styles.activeNavLink} : styles.navLink}>Car</NavLink>
      <NavLink to="/host-vehicle" style={({isActive}) => isActive ? {...styles.navLink, ...styles.activeNavLink} : styles.navLink}>Host Your Car</NavLink>
      <NavLink to="/gears" style={({isActive}) => isActive ? {...styles.navLink, ...styles.activeNavLink} : styles.navLink}>Gears</NavLink>
      <NavLink to="/support" style={({isActive}) => isActive ? {...styles.navLink, ...styles.activeNavLink} : styles.navLink}>Support</NavLink>
    </>
  );

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <NavLink to="/">
          <img src={logo} alt="Logo" style={styles.logo} />
        </NavLink>
        <div style={styles.navLinksContainer}>
          <NavLinks />
        </div>
        <div style={styles.rightSection}>
          <input type="search" placeholder="Search" style={styles.searchInput} />
          <NavLink
            to="/login"
            style={styles.loginButton}
            onMouseEnter={() => setIsLoginHovered(true)}
            onMouseLeave={() => setIsLoginHovered(false)}
          >
            Login
          </NavLink>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={styles.hamburger}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      <div style={styles.mobileMenu}>
        <NavLinks />
        <input type="search" placeholder="Search" style={styles.searchInput} />
        <NavLink to="/login" style={styles.loginButton}>Login</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;