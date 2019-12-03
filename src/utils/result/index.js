export const getResult = (team, opponent) => {
  const won = (team.score > opponent.score) ? 1 : 0
  const drawn = (team.score === opponent.score) ? 1 : 0
  const lost = (team.score < opponent.score) ? 1 : 0
  const result = {
    matches: 1,
    points: won * 3 || drawn,
    won: won,
    drawn: drawn,
    lost: lost,
    goals: team.score,
    goalsConceded: opponent.score,
    goalsDifference: team.score - opponent.score,
  }

  return result
}
