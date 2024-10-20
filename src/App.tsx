import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Form from './components/Form';
import Modal from './components/Modal';
import Suggestions from './components/Suggestions';
import { calculateBMR, calculateCaloricNeeds } from './utils/calculations';

const App: React.FC = () => {
  const [calories, setCalories] = useState<number | null>(null);
  const [goal, setGoal] = useState<'weightLoss' | 'muscleGain' | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCalculate = (age: number, weight: number, height: number, gender: string, activityLevel: string) => {
    const bmr = calculateBMR(age, weight, height, gender);
    const dailyCalories = calculateCaloricNeeds(bmr, activityLevel);
    setCalories(dailyCalories);
    setIsModalOpen(true);
  };

  const handleGoalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGoal(e.target.value as 'weightLoss' | 'muscleGain');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCalories(null);
    setGoal(null);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md">
        <Form onCalculate={handleCalculate} />
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div>
            <motion.h2
              className="text-lg font-semibold mb-4 text-center text-green-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Vos besoins caloriques quotidiens : {calories?.toFixed(0)} kcal
            </motion.h2>
            <div className="mb-4">
              <label htmlFor="goal" className="block text-sm font-medium text-gray-700">Choisissez votre objectif :</label>
              <select
                id="goal"
                value={goal || ''}
                onChange={handleGoalChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Sélectionnez un objectif</option>
                <option value="weightLoss">Perte de poids</option>
                <option value="muscleGain">Prise de masse</option>
              </select>
            </div>
            {goal && <Suggestions goal={goal} />}
          </div>
        </Modal>
      </div>
    </motion.div>
  );
};

export default App;
