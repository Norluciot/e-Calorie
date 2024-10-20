import { motion } from 'framer-motion';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CalculatePage from './pages/CalculatePage';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <motion.div
        className="min-h-screen bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-4xl">
          <motion.div
            className="bg-white shadow-xl rounded-2xl overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <header className="bg-teal-600 py-4 px-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
                e-Calories
              </h1>
            </header>
            <main className="p-6 sm:p-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/calculate" element={<CalculatePage />} />
              </Routes>
            </main>
            <footer className="bg-gray-100 py-4 px-6 text-center text-gray-600 text-sm">
              © 2024 e-Calories. Tous droits réservés.
            </footer>
          </motion.div>
        </div>
      </motion.div>
    </Router>
  );
};

export default App;
