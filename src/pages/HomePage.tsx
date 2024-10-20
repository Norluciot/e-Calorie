import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MetabolismInfo from '../components/MetabolismeInfo';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <motion.h1
        className="text-4xl font-bold text-center text-teal-700 mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        e-Calories
      </motion.h1>
      <MetabolismInfo />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link
          to="/calculate"
          className="block w-full text-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Calculer votre métabolisme de base 
        </Link>
      </motion.div>
    </div>
  );
};

export default HomePage;
