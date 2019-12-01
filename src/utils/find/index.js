import { computeValue } from '../value/'

export const findByValue = (teams, value) => {
  const indexTeam =  teams.indexOf(value)
  const indexOpponent = computeValue(indexTeam === 0)

  return {
    indexTeam,
    indexOpponent
  }
}
