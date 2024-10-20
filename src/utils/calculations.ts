export const calculateBMR = (age: number, weight: number, height: number, gender: string): number => {
  if (gender === 'male') {
    return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
};

export const calculateCaloricNeeds = (bmr: number, activityLevel: string): number => {
  const activityFactors: Record<string, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very: 1.725,
  };
  return bmr * (activityFactors[activityLevel] || 1.2);
};
