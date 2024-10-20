import { motion } from 'framer-motion';
import React, { useState } from 'react';

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
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <motion.h1
        className="text-4xl font-bold text-center text-teal-700 mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Calculateur de métabolisme de base
      </motion.h1>
      <Form onCalculate={handleCalculate} />
      <ResultModal isOpen={isModalOpen} onClose={closeModal} calories={calories} />
    </div>
  );
};

export default CalculatePage;
