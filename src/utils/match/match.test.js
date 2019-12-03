import { getMatch } from './'

describe('match.js', () => {
  const game = {
    teams: ['a', 'b'],
    teamIds: [1, 2],
    score: [10, 20]
  }
  const expectedTeam = {
    team: 'a',
    teamId: 1,
    score: 10,
    winner: false
  }
  const expectedOpponent = {
    team: 'b',
    teamId: 2,
    score: 20,
    winner: true
  }

  it('should respect object\'s order', () => {
    const [ team, opponent ] = getMatch(game)

    expect(JSON.stringify(team)).toBe(JSON.stringify(expectedTeam))
    expect(JSON.stringify(opponent)).toBe(JSON.stringify(expectedOpponent))
  })

  it('should throw an error when no parameter given', () => {
    expect(() => {
      getMatch()
    }).toThrow()
  })

  it('should return empty values when empty', () => {
    const parameter = {
      teams: [],
      teamIds: [],
      score: []
    }
    const [ team, opponent ] = getMatch(parameter)

    expect(team.team).toBeUndefined()
    expect(opponent.team).toBeUndefined()
  })
})
