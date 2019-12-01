import { findByValue } from '../find/'
import { getResult } from '../result/'
import { computeValue } from '../value'

const groupTeams = (teamName, weeksMatches) => weeksMatches.map(weeks => {
  const [ match ] = weeks.map(week => {
    const {
      indexTeam,
      indexOpponent
    } = findByValue(week.teams, teamName)

    if (indexTeam > -1) {
      const match = getResult(week)
      const team = {
        name: match[indexTeam].team,
        id: match[indexTeam].teamId,
        score: match[indexTeam].score
      }
      const opponent = {
        name: match[indexOpponent].team,
        id: match[indexOpponent].teamId,
        score: match[indexOpponent].score
      }

      return {
        team,
        opponent
      }
    }
  }).filter(w => w)

  return match
})

// TASK #4 - create a table of results
export const computeTable = (teams, weeksMatches) => {
  const results = teams.map(teamName => {
    const result = groupTeams(teamName, weeksMatches)
    const initialState = {
      drawn: 0,
      goals: 0,
      goalsConceded: 0,
      goalsDifference: 0,
      lost: 0,
      matches: 0,
      points: 0,
      teamId: result[0].team.id,
      teamName,
      won: 0
    }
    const stats = result.reduce((current, next) => {
      const won = next.team.score > next.opponent.score
      const drawn = next.team.score === next.opponent.score
      const lost = next.team.score < next.opponent.score

      current.matches += 1
      current.points += computeValue(won, 3) || computeValue(drawn, 1)
      current.won += computeValue(won)
      current.drawn += computeValue(drawn)
      current.lost += computeValue(lost)
      current.goals += next.team.score
      current.goalsConceded += next.opponent.score
      current.goalsDifference += next.team.score - next.opponent.score

      return current
    }, initialState)

    return stats
  })
  const ordered = results.sort((a, b) => {
    const byPoints = b.points - a.points
    const byGoalsDifference = b.goalsDifference - a.goalsDifference
    const byGoalsScored = b.goals - a.goals

    return byPoints || byGoalsDifference || byGoalsScored
  })

  return ordered
}
