import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import Suggestions from './Suggestions';

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  calories: number | null;
}

const ResultModal: React.FC<ResultModalProps> = ({ isOpen, onClose, calories }) => {
  const [goal, setGoal] = useState<'weightLoss' | 'muscleGain' | null>(null);

  const handleGoalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGoal(e.target.value as 'weightLoss' | 'muscleGain');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <motion.h2
          className="text-2xl font-semibold mb-4 text-center text-green-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Vos besoins caloriques quotidiens : {calories?.toFixed(0)} kcal
        </motion.h2>
        <div className="mb-4">
          <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-2">Choisissez votre objectif :</label>
          <select
            id="goal"
            value={goal || ''}
            onChange={handleGoalChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Sélectionnez un objectif</option>
            <option value="weightLoss">Perte de poids</option>
            <option value="muscleGain">Prise de masse</option>
          </select>
        </div>
        {goal && <Suggestions goal={goal} />}
      </div>
    </Modal>
  );
};

export default ResultModal;
