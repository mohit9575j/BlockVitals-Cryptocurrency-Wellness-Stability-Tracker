 

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.js';

import Menu from './Menu.js';
import Footer from './Footer.js';
import LoginPage from './Pages/loginPage.js';
import RegisterPage from './Pages/RegisterPage.js';
import Mainpage from './Mainpage.js';
import CryptoConverter from './Pages/CryptoPage.js';
import TopGainersLosers from './Pages/GainerPage.js';
import Historical from './Pages/HistoricalPage.js';
import Stable from './Pages/StablePage.js';
import CryptoNewsDashboard from './CryptoNewsDashboard.js';
import Allnews from './Pages/AllnewsPage.js';
import DetailedinfoPage from './Pages/Detailedinfo.js';

function LayoutWrapper({ children }) {
  const location = useLocation();

  // Hide header and footer on specific routes
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="app-background">
      {!hideHeaderFooter && (
        <nav className="relative z-20 bg-white shadow-md">
          <Menu />
        </nav>
      )}

      {children}

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          {/*  Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/*  Protected Routes */}
          <Route path="/" element={<ProtectedRoute><Mainpage /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><DetailedinfoPage/></ProtectedRoute>} />
          <Route path="/cryptoconverter" element={<ProtectedRoute><CryptoConverter /></ProtectedRoute>} />
          <Route path="/topgainerslosers" element={<ProtectedRoute><TopGainersLosers /></ProtectedRoute>} />
          <Route path="/historical" element={<ProtectedRoute><Historical /></ProtectedRoute>} />
          <Route path="/stable" element={<ProtectedRoute><Stable /></ProtectedRoute>} />
          <Route path="/cryptonewsdashboard" element={<ProtectedRoute><CryptoNewsDashboard /></ProtectedRoute>} />
          <Route path="/news" element={<ProtectedRoute><Allnews /></ProtectedRoute>} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
