import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomePage from './pages/HomePage';
import CalculatePage from './pages/CalculatePage';


const App: React.FC = () => {
  return (
    <Router>
      <motion.div
        className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-200 py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculate" element={<CalculatePage />} />
        </Routes>
      </motion.div>
    </Router>
  );
};

export default App;
