// utils/macronutrientCalculator.ts
export const calculateMacronutrients = (calories: number, goal: 'weightLoss' | 'muscleGain', weight: number) => {
  let protein: number;
  let fat: number;
  let carbs: number;

  // Calcul des protéines
  protein = goal === 'muscleGain' ? weight * 2.0 : weight * 1.5; // g de protéines par kg

  // Convertir les protéines en calories (1 g de protéines = 4 calories)
  const proteinCalories = protein * 4;

  // Pourcentage de lipides : 20-30% des calories totales
  fat = (calories * 0.25) / 9; // g de lipides (1 g de lipides = 9 calories)

  // Convertir les lipides en calories
  const fatCalories = fat * 9;

  // Calcul des glucides : reste des calories
  carbs = (calories - (proteinCalories + fatCalories)) / 4; // g de glucides (1 g de glucides = 4 calories)

  return {
    protein: protein.toFixed(1),
    fat: fat.toFixed(1),
    carbs: carbs.toFixed(1),
  };
};
