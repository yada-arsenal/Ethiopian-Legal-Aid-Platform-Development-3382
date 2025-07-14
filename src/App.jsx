import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Directory from './pages/Directory';
import LegalInfo from './pages/LegalInfo';
import Emergency from './pages/Emergency';
import About from './pages/About';
import Contact from './pages/Contact';

// Admin routes
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import DashboardHome from './pages/admin/DashboardHome';
import LawyersManager from './pages/admin/LawyersManager';
import ResourcesManager from './pages/admin/ResourcesManager';
import EmergencyManager from './pages/admin/EmergencyManager';
import OfficesManager from './pages/admin/OfficesManager';

import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Routes>
            {/* Admin routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardHome />} />
              <Route path="lawyers" element={<LawyersManager />} />
              <Route path="resources" element={<ResourcesManager />} />
              <Route path="emergency" element={<EmergencyManager />} />
              <Route path="offices" element={<OfficesManager />} />
            </Route>
            
            {/* Public routes */}
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/directory" element={<Directory />} />
                      <Route path="/legal-info" element={<LegalInfo />} />
                      <Route path="/emergency" element={<Emergency />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;