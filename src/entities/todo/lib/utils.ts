export const convertDateToString = (date: string): string => {
  return new Date(date).toLocaleString().slice(0, -3);
};
