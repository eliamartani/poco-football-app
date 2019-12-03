import { findByValue } from '../find/'
import { getMatch } from '../match'
import { getResult } from '../result'

// TASK #3 - compute team stats
export const computeTeamStats = ({id, results}) => {
  const idParsed = parseInt(id, 10)
  const model = {
    matches: 0,
    points: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goals: 0,
    goalsConceded: 0,
    goalsDifference: 0
  }

  results.forEach(result => {
    const [
      indexTeam,
      indexOpponent
    ] = findByValue(result.teamIds, idParsed)
    const match = getMatch(result)
    const team = match[indexTeam]
    const opponent = match[indexOpponent]
    const matchResult = getResult(team, opponent)

    for (const key in matchResult) {
      model[key] += matchResult[key]
    }
  })

  return model
}
