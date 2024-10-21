// Calculates Basal Metabolic Rate (BMR) based on age, weight, height, and gender.
export const calculateBMR = (age: number, weight: number, height: number, gender: string): number => {
  // BMR formula for males
  if (gender === 'male') {
    return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  }
  // BMR formula for females
  else {
    return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }
};

// Calculates daily caloric needs based on BMR and activity level.
export const calculateCaloricNeeds = (bmr: number, activityLevel: string): number => {
  // Activity level multipliers
  const activityFactors: Record<string, number> = {
    sedentary: 1.2,  // Little or no exercise
    light: 1.375,    // Light exercise 1-3 days a week
    moderate: 1.55,  // Moderate exercise 3-5 days a week
    very: 1.725,     // Intense exercise 6-7 days a week
  };

  // Calculate total daily calories by multiplying BMR by the activity factor
  // Defaults to 'sedentary' if activity level is unknown
  return bmr * (activityFactors[activityLevel] || 1.2);
};
