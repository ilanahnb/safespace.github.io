import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import AppFooter from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <AppFooter />
      </Router>
    </div>
  );
}
