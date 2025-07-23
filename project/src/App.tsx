import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Pages
import HomePage from './pages/HomePage';
import MaterialsPage from './pages/MaterialsPage';
import ContactPage from './pages/ContactPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="*" element={<Navigate to="/\" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;