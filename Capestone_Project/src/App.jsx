// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Bikes from './pages/Bikes';
import Cars from './pages/Cars';
import HostVehicle from './pages/HostVehicle';
import Gears from './pages/Gears';
import Support from './pages/Support';
import Login from './pages/Login';

function App() {
  return (
    // We no longer need a styled div here because
    // the styles are correctly placed in index.css
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/host-vehicle" element={<HostVehicle />} />
          <Route path="/gears" element={<Gears />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;