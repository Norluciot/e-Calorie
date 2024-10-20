import React from 'react';
import { motion } from 'framer-motion';

const MetabolismInfo: React.FC = () => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-6 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Comprendre le Métabolisme de Base</h2>
      <p className="text-gray-700 mb-4">
        Le métabolisme de base (MB) représente l'énergie minimale nécessaire à votre corps pour maintenir ses fonctions vitales au repos. Il joue un rôle crucial dans votre santé et votre gestion du poids.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Influence la gestion du poids</li>
        <li>Détermine vos besoins énergétiques quotidiens</li>
        <li>Varie selon l'âge, le sexe, la taille et la composition corporelle</li>
      </ul>
      <p className="text-gray-700">
        Connaître votre métabolisme de base vous aide à adapter votre alimentation et votre activité physique pour atteindre vos objectifs de santé.
      </p>
    </motion.div>
  );
};

export default MetabolismInfo;
