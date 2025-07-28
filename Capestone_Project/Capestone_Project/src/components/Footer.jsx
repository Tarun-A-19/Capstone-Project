import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const styles = {
        footer: {
            backgroundColor: '#212529',
            color: '#fff',
            padding: '40px 20px',
            textAlign: 'center',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
        linkContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '20px',
            flexWrap: 'wrap', // Ensures links wrap on smaller screens
        },
        link: {
            color: '#adb5bd',
            textDecoration: 'none',
            transition: 'color 0.2s ease-in-out',
        },
        copyright: {
            color: '#6c757d',
            fontSize: '0.9rem',
            marginTop: '20px',
        }
    };

    // A simple hover effect can be managed with inline event handlers
    const handleMouseOver = (e) => {
        e.target.style.color = '#ffffff';
    };

    const handleMouseOut = (e) => {
        e.target.style.color = '#adb5bd';
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.linkContainer}>
                <Link to="/about-us" style={styles.link} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>About Us</Link>
                <Link to="/reach-us" style={styles.link} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Reach Us</Link>
                <Link to="/terms" style={styles.link} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Terms & Conditions</Link>
                <Link to="/feedback" style={styles.link} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Feedback</Link>
            </div>
            <p style={styles.copyright}>© 2025 SnapRent. All Rights Reserved.</p>
        </footer>
    );
}
export default Footer;