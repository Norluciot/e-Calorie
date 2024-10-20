import { motion } from 'framer-motion';
import React from 'react';
import { FaBolt, FaHeartbeat, FaUserAlt, FaWeight } from 'react-icons/fa';

const MetabolismInfo: React.FC = () => {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 mb-8 mx-auto max-w-4xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 flex items-center justify-center sm:justify-start">
        <FaHeartbeat className="mr-2" />
        Comprendre le Métabolisme de Base
      </h2>
      <p className="text-gray-700 mb-4 text-sm sm:text-base">
        Le métabolisme de base (MB) représente l'énergie minimale nécessaire à votre corps pour maintenir ses fonctions vitales au repos. Il est essentiel de comprendre votre MB pour mieux gérer votre santé, votre alimentation, et votre poids.
      </p>
      <ul className="list-none text-gray-700 mb-4 space-y-2 text-sm sm:text-base">
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
      <p className="text-gray-700 mb-4 text-sm sm:text-base">
        Connaître votre métabolisme de base vous aide à ajuster votre alimentation et vos activités physiques pour atteindre vos objectifs de santé. Cela peut vous permettre de mieux comprendre votre corps et d'optimiser vos efforts pour perdre du poids, maintenir une bonne santé, ou simplement vous sentir mieux.
      </p>
      <p className="text-gray-700 font-semibold text-sm sm:text-base">
        C'est précisément pour cela que nous avons créé cette application. Utilisez-la pour calculer facilement votre MB et ajuster vos habitudes de vie. Prenez en main votre santé en comprenant mieux votre métabolisme et en vous fixant des objectifs réalistes.
      </p>
      <motion.div
        className="mt-6 flex justify-center sm:justify-start"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >

      </motion.div>
    </motion.div>
  );
};

export default MetabolismInfo;
