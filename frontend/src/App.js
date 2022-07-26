import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Error from './pages/Error';

import Photos from './pages/Photos';
import Footer from './pages/Footer';
import { Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <Box className="body">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
