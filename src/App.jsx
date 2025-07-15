import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Software from './pages/Software';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Software" element={<Software />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ServiceDetail" element={<ServiceDetail />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/Home" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
