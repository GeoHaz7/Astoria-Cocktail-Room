import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Error from './pages/Error';

import './App.css';
import Photos from './pages/Photos';
import Images from './pages/Images';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photos" element={<Photos />} />
        {/* <Route path="/images" element={<Images />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
