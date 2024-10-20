import { motion } from 'framer-motion';
import React from 'react';
import { FaAppleAlt, FaDumbbell, FaUtensils, FaWeight } from 'react-icons/fa';

interface SuggestionsProps {
  goal: 'weightLoss' | 'muscleGain';
}

const Suggestions: React.FC<SuggestionsProps> = ({ goal }) => {
  const suggestions = {
    weightLoss: [
      { text: "Réduisez l'apport calorique d'environ 10-20% par rapport aux besoins de maintenance.", icon: <FaWeight /> },
      { text: "Augmentez la consommation de protéines pour préserver la masse musculaire.", icon: <FaDumbbell /> },
      { text: "Privilégiez les exercices cardio combinés avec de la musculation légère.", icon: <FaWeight /> },
      { text: "Évitez les aliments transformés et optez pour des repas faits maison.", icon: <FaAppleAlt /> }
    ],
    muscleGain: [
      { text: "Augmentez l'apport calorique de 10-15% par rapport aux besoins de maintenance.", icon: <FaUtensils /> },
      { text: "Consommez suffisamment de protéines et de glucides pour favoriser la récupération.", icon: <FaDumbbell /> },
      { text: "Suivez un programme de musculation avec des poids progressifs.", icon: <FaWeight /> },
      { text: "Mangez fréquemment pour maintenir un apport énergétique continu.", icon: <FaAppleAlt /> }
    ]
  };

  return (
    <motion.div
      className="mt-4 p-4 bg-yellow-100 rounded"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-lg font-semibold mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {goal === 'weightLoss' ? "Suggestions pour la perte de poids" : "Suggestions pour la prise de masse"}
      </motion.h2>
      <ul className="space-y-2">
        {suggestions[goal].map((suggestion, index) => (
          <motion.li
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.span
              className="text-green-500 mr-2 text-xl"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              {suggestion.icon}
            </motion.span>
            <span>{suggestion.text}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Suggestions;
