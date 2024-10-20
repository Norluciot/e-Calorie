import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaWeight, FaBolt, FaUserAlt } from 'react-icons/fa';

const MetabolismInfo: React.FC = () => {
  return (
    <motion.div
      className="bg-white  rounded-lg p-6 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
        <FaHeartbeat className="mr-2" />
        Comprendre le Métabolisme de Base
      </h2>
      <p className="text-gray-700 mb-4">
        Le métabolisme de base (MB) représente l'énergie minimale nécessaire à votre corps pour maintenir ses fonctions vitales au repos. Il joue un rôle crucial dans votre santé et votre gestion du poids.
      </p>
      <ul className="list-none text-gray-700 mb-4 space-y-2">
        <motion.li className="flex items-center" whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
          <FaWeight className="mr-2 text-green-500" /> Influence la gestion du poids
        </motion.li>
        <motion.li className="flex items-center" whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
          <FaBolt className="mr-2 text-yellow-500" /> Détermine vos besoins énergétiques quotidiens
        </motion.li>
        <motion.li className="flex items-center" whileHover={{ x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
          <FaUserAlt className="mr-2 text-blue-500" /> Varie selon l'âge, le sexe, la taille et la composition corporelle
        </motion.li>
      </ul>
      <p className="text-gray-700">
        Connaître votre métabolisme de base vous aide à adapter votre alimentation et votre activité physique pour atteindre vos objectifs de santé.
      </p>
    </motion.div>
  );
};

export default MetabolismInfo;
