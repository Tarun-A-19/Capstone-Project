// src/Navbar.jsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

// This Navbar now takes a 'toggleSidebar' prop to control the new sidebar
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
  }, [isHomePage]);

  const styles = {
    navbar: {
      position: 'fixed', top: 0, left: 0, width: '100%', display: 'flex',
      justifyContent: 'center', padding: '15px 0',
      backgroundColor: isScrolled || !isHomePage ? '#ffffff' : 'transparent',
      zIndex: 900, transition: 'background-color 0.4s ease-out', boxSizing: 'border-box',
      borderBottom: isScrolled || !isHomePage ? '1px solid #dee2e6' : 'none',
      boxShadow: isScrolled || !isHomePage ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
    },
    container: { width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' },
    logo: { height: '40px' },
    navLinksContainer: { display: 'flex', alignItems: 'center', gap: '25px' },
    navLink: (isActive) => ({
        textDecoration: 'none',
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
        {/* The hamburger button now toggles the main sidebar */}
        <button onClick={toggleSidebar} style={styles.hamburger}>☰</button>
        
        <div style={styles.navLinksContainer}>
          <NavLink to="/" style={({ isActive }) => styles.navLink(isActive)} end>Home</NavLink>
          <NavLink to="/vehicles" style={({ isActive }) => styles.navLink(isActive)}>Rent</NavLink>
          <NavLink to="/destinations" style={({ isActive }) => styles.navLink(isActive)}>Destinations</NavLink>
          <NavLink to="/host-vehicle" style={({ isActive }) => styles.navLink(isActive)}>Host Your Car</NavLink>
        </div>

        <NavLink to="/"><img src={logo} alt="Logo" style={styles.logo} /></NavLink>

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


// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar'; // Note the named import
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; // Import the new sidebar
import ProtectedRoute from './components/ProtectedRoute'; // Import the protected route

// Import all pages
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import HostVehicle from './pages/HostVehicle';
import Gears from './pages/Gears';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Bookings from './pages/Bookings';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import ReachUs from './pages/ReachUs';
import Terms from './pages/Terms';
import Feedback from './pages/Feedback';
import Destinations from './pages/Destinations';

function App() {
  // State to manage the sidebar is now in the top-level App component
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Pass the toggle function to the Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />
        {/* Render the Sidebar and pass state and functions to it */}
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/host-vehicle" element={<HostVehicle />} />
            <Route path="/gears" element={<Gears />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/reach-us" element={<ReachUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/feedback" element={<Feedback />} />

            {/* Protected Routes (no longer need the layout wrapper) */}
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/bookings" element={<ProtectedRoute><Bookings /></ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
