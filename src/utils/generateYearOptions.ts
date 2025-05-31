export const generateYearOptions = (): { value: string; label: string }[] => {
  const currentYear = new Date().getFullYear();
  const earliestYear = 1954;

  const years = [];
  for (let year = currentYear; year >= earliestYear; year--) {
    years.push({ value: year.toString(), label: year.toString() });
  }

  return years;
};
