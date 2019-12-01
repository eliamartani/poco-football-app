export const getResult = ({ teams, teamIds, score }) => {
  const maxScore = Math.max(...score)
  const draw = score.every(s => s === score[0])
  const result = teams.map((team, index) => {
    const props = {
      team,
      teamId: teamIds[index],
      score: score[index],
      winner: score[index] === maxScore && !draw
    }

    return props
  })

  return result
}
