import { findByValue } from '../find/'
import { setModel } from './model'
import { computeValue } from '../value/'

// TASK #3 - compute team stats
export const computeTeamStats = ({id, results}) => {
  const idParsed = parseInt(id, 10)
  const model = setModel(results)

  const result = results.reduce((current, match) => {
    const {
      indexTeam,
      indexOpponent
    } = findByValue(match.teamIds, idParsed)

    const score = match.score[indexTeam]
    const scoreOpponent = match.score[indexOpponent]

    const win = score > scoreOpponent
    const draw = score === scoreOpponent
    const lose = score < scoreOpponent

    current['Goals'] += score
    current['Goals Conceded'] += scoreOpponent
    current['Wins'] += computeValue(win)
    current['Draws'] += computeValue(draw)
    current['Losses'] += computeValue(lose)
    current['Points'] += computeValue(win, 3) || computeValue(draw, 1)

    return current
  }, model)

  return result
}
