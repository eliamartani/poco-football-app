// TASK #2 - make matches start at 1 instead of 0
export const setIndex = index => {
  const newIndex = parseInt(index - 1, 10);

  return isNaN(newIndex) ? 0 : newIndex;
};
