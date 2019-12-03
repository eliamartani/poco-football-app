export const getMatch = ({ teams, teamIds, score }) => {
  const [ nameTeam, nameOpponent ] = teams
  const [ idTeam, idOpponent ] = teamIds
  const [ scoreTeam, scoreOpponent ] = score

  const team = {
    team: nameTeam,
    teamId: idTeam,
    score: scoreTeam,
    winner: scoreTeam > scoreOpponent
  }
  const opponent = {
    team: nameOpponent,
    teamId: idOpponent,
    score: scoreOpponent,
    winner: scoreOpponent > scoreTeam
  }

  return [ team, opponent ]
}
