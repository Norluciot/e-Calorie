import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaUser, FaWeight, FaRulerVertical, FaVenusMars, FaRunning } from 'react-icons/fa';

interface FormProps {
  onCalculate: (age: number, weight: number, height: number, gender: string, activityLevel: string) => void;
}

const Form: React.FC<FormProps> = ({ onCalculate }) => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!age) newErrors.age = "L'âge est requis";
    if (!weight) newErrors.weight = "Le poids est requis";
    if (!height) newErrors.height = "La taille est requise";
    if (!gender) newErrors.gender = "Le genre est requis";
    if (!activityLevel) newErrors.activityLevel = "Le niveau d'activité est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onCalculate(parseInt(age), parseFloat(weight), parseFloat(height), gender, activityLevel);
    }
  };

  const activityLevelExplanations = {
    sedentary: "Peu ou pas d'exercice",
    light: "Exercice léger 1-3 fois/semaine",
    moderate: "Exercice modéré 3-5 fois/semaine",
    very: "Exercice intense 6-7 fois/semaine",
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg p-6 space-y-4 mx-auto max-w-md sm:max-w-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid gap-4">
        <div className="relative">
          <FaUser className="absolute top-3 left-3 text-gray-400" />
          <input
            type="number"
            placeholder="Âge *"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={`w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.age ? 'border-red-500' : ''}`}
          />
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
        </div>
        <div className="relative">
          <FaWeight className="absolute top-3 left-3 text-gray-400" />
          <input
            type="number"
            step="0.1"
            placeholder="Poids (kg) *"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className={`w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.weight ? 'border-red-500' : ''}`}
          />
          {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight}</p>}
        </div>
        <div className="relative">
          <FaRulerVertical className="absolute top-3 left-3 text-gray-400" />
          <input
            type="number"
            step="0.1"
            placeholder="Taille (cm) *"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={`w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.height ? 'border-red-500' : ''}`}
          />
          {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}
        </div>
        <div className="relative">
          <FaVenusMars className="absolute top-3 left-3 text-gray-400" />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className={`w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.gender ? 'border-red-500' : ''}`}
          >
            <option value="">Genre *</option>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>
        <div className="relative">
          <FaRunning className="absolute top-3 left-3 text-gray-400" />
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className={`w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.activityLevel ? 'border-red-500' : ''}`}
          >
            <option value="">Niveau d'activité *</option>
            {Object.entries(activityLevelExplanations).map(([value, explanation]) => (
              <option key={value} value={value}>{explanation}</option>
            ))}
          </select>
          {errors.activityLevel && <p className="text-red-500 text-sm mt-1">{errors.activityLevel}</p>}
        </div>
      </div>
      <motion.button
        type="submit"
        className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Calculer
      </motion.button>
    </motion.form>
  );
};

export default Form;
