import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Form from '../components/Form';
import ResultModal from '../components/ResultModal';
import { calculateBMR, calculateCaloricNeeds } from '../utils/calculations';

const CalculatePage: React.FC = () => {
  const [calories, setCalories] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCalculate = (age: number, weight: number, height: number, gender: string, activityLevel: string) => {
    const bmr = calculateBMR(age, weight, height, gender);
    const dailyCalories = calculateCaloricNeeds(bmr, activityLevel);
    setCalories(dailyCalories);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCalories(null);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg p-8">
      <motion.h1
        className="text-2xl font-bold text-center text-teal-700 mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Calculateur de métabolisme de base
      </motion.h1>
      <Form onCalculate={handleCalculate} />
      <ResultModal isOpen={isModalOpen} onClose={closeModal} calories={calories} />
      <AnimatePresence>
        {!isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <Link to="/" className="text-teal-600 hover:text-teal-800 flex items-center">
              <FaArrowLeft className="mr-2" />
              Retour à l'accueil
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CalculatePage;
