import React from 'react';
import { motion } from 'framer-motion';

interface SuggestionsProps {
  goal: 'weightLoss' | 'muscleGain';
}

const Suggestions: React.FC<SuggestionsProps> = ({ goal }) => {
  const suggestions = {
    weightLoss: [
      "Réduisez l'apport calorique d'environ 10-20% par rapport aux besoins de maintenance.",
      "Augmentez la consommation de protéines pour préserver la masse musculaire.",
      "Privilégiez les exercices cardio combinés avec de la musculation légère.",
      "Évitez les aliments transformés et optez pour des repas faits maison."
    ],
    muscleGain: [
      "Augmentez l'apport calorique de 10-15% par rapport aux besoins de maintenance.",
      "Consommez suffisamment de protéines et de glucides pour favoriser la récupération.",
      "Suivez un programme de musculation avec des poids progressifs.",
      "Mangez fréquemment pour maintenir un apport énergétique continu."
    ]
  };

  return (
    <motion.div
      className="mt-4 p-4 bg-yellow-100 rounded"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-semibold mb-3">
        {goal === 'weightLoss' ? "Suggestions pour la perte de poids" : "Suggestions pour la prise de masse"}
      </h2>
      <ul className="space-y-2">
        {suggestions[goal].map((suggestion, index) => (
          <motion.li
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="text-green-500 mr-2">✓</span>
            <span>{suggestion}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Suggestions;
