import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // 1. Import the useAuth hook

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth(); // 2. Get the login function from the context

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
        setError('Both email and password are required.');
        return;
    }

    try {
        const response = await axios.post('http://localhost:5000/api/login', formData);
        
        // 3. Call the context's login function with user data from the API
        // This will save the user's info and update the navbar
        login(response.data.user);
        
        alert(`Welcome back, ${response.data.user.fullName}!`);
        navigate('/');

    } catch (err) {
        if (err.response && err.response.data) {
            setError(err.response.data.message);
        } else {
            setError('Could not connect to the server. Please try again.');
        }
    }
  };

  const styles = {
    page: { display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', minHeight: '100vh', boxSizing: 'border-box' },
    loginContainer: { width: '100%', maxWidth: '420px', padding: '40px', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' },
    title: { textAlign: 'center', fontSize: '2rem', fontWeight: '600', marginBottom: '30px' },
    formGroup: { marginBottom: '20px' },
    label: { display: 'block', marginBottom: '8px', fontWeight: '500', color: '#6c757d' },
    input: { width: '100%', padding: '12px 15px', border: '1px solid #dee2e6', borderRadius: '8px', fontSize: '1rem', boxSizing: 'border-box', transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out' },
    inputFocus: { borderColor: '#80bdff', boxShadow: '0 0 0 4px rgba(0, 123, 255, 0.25)', outline: 'none' },
    button: { width: '100%', padding: '15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' },
    signupPrompt: { textAlign: 'center', marginTop: '25px', color: '#6c757d' },
    signupLink: { color: '#007bff', fontWeight: '600', textDecoration: 'none' },
    errorText: { color: '#dc3545', textAlign: 'center', marginBottom: '15px', minHeight: '20px' },
  };

  const getInputStyle = (name) => {
    return focusedInput === name ? { ...styles.input, ...styles.inputFocus } : styles.input;
  };

  return (
    <div style={styles.page}>
      <div style={styles.loginContainer}>
        <h1 style={styles.title}>Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div style={styles.errorText}>{error}</div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input
              id="email" name="email" type="email" placeholder="you@example.com"
              value={formData.email} onChange={handleInputChange}
              onFocus={() => setFocusedInput('email')} onBlur={() => setFocusedInput(null)}
              style={getInputStyle('email')}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              id="password" name="password" type="password" placeholder="Enter your password"
              value={formData.password} onChange={handleInputChange}
              onFocus={() => setFocusedInput('password')} onBlur={() => setFocusedInput(null)}
              style={getInputStyle('password')}
            />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.signupPrompt}>
          Don't have an account?{' '}
          <Link to="/signup" style={styles.signupLink}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;