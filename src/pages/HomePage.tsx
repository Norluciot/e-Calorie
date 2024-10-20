import { motion } from 'framer-motion';
import React from 'react';
import { FaCalculator } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MetabolismInfo from '../components/MetabolismeInfo';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg p-4 mt-6 sm:mt-12">
      {/* Section d'information sur le métabolisme */}
      <MetabolismInfo />

      {/* Bouton pour calculer le métabolisme de base */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-6"
      >
        <Link
          to="/calculate"
          className="block w-full text-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded transition duration-300 flex items-center justify-center"
        >
          <FaCalculator className="mr-2" />
          Calculer votre métabolisme de base
        </Link>
      </motion.div>
    </div>
  );
};

export default HomePage;
