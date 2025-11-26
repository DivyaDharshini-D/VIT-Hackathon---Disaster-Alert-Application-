export const getSafetyTip = (age) => {
  if (age <= 12)
    return "Kids should stay with adults and avoid water bodies.";
  if (age <= 50)
    return "Keep emergency kits ready and follow official alerts.";
  return "Elderly should stay indoors and have medicines ready.";
};
