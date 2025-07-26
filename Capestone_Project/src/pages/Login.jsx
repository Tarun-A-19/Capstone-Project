import React from 'react';

// --- Styles ---
const loginStyles = {
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 80px)', // Full height minus navbar
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
  },
  loginContainer: {
    width: '100%',
    maxWidth: '400px',
    padding: '40px',
    backgroundColor: 'white',
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
function Login() {
  return (
    <div style={loginStyles.page}>
      <div style={loginStyles.loginContainer}>
        <h1 style={loginStyles.title}>Login</h1>
        <form>
          <div style={loginStyles.formGroup}>
            <label style={loginStyles.label}>Email Address</label>
            <input type="email" style={loginStyles.input} placeholder="you@example.com" />
          </div>
          <div style={loginStyles.formGroup}>
            <label style={loginStyles.label}>Password</label>
            <input type="password" style={loginStyles.input} placeholder="Enter your password" />
          </div>
          <button type="submit" style={loginStyles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;