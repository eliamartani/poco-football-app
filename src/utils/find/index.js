export const findByValue = (teams, value) => {
  const indexTeam = teams.indexOf(value);
  const indexOpponent = indexTeam === 0 ? 1 : 0;

  return [indexTeam, indexOpponent];
};
