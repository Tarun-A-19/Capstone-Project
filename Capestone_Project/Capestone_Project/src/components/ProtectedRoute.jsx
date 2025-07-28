// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// This component checks if a user is logged in.
// If not, it redirects them to the login page.
export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  
  if (!user) {
    // User not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  // User is logged in, render the component they are trying to access
  return children;
};
