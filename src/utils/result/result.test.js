import { getResult } from './'

describe('result.js', () => {
  const team = {
    team: 'a',
    teamId: 1,
    score: 10,
    winner: false
  }
  const opponent = {
    team: 'b',
    teamId: 2,
    score: 20,
    winner: true
  }

  it('should validate the loosing team', () => {
    const result = getResult(team, opponent)

    expect(result.matches).toBe(1)
    expect(result.points).toBe(0)
    expect(result.won).toBe(0)
    expect(result.lost).toBe(1)
    expect(result.goals).toBe(10)
    expect(result.goalsConceded).toBe(20)
    expect(result.goalsDifference).toBe(-10)
  })

  it('should throw an error when no parameter given', () => {
    expect(() => {
      getResult()
    }).toThrow()
  })

  it('should receive empty parameters', () => {
    const result = getResult({}, {})

    expect(result.matches).toBe(1)
    expect(result.points).toBe(1)
    expect(result.won).toBe(0)
    expect(result.lost).toBe(0)
    expect(result.goals).toBeUndefined()
    expect(result.goalsConceded).toBeUndefined()
    expect(result.goalsDifference).toBeNaN()
  })
})
