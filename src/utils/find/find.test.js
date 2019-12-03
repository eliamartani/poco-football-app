import { findByValue } from './'

describe('find.js', () => {
  const teams = [
    1,
    2
  ]

  it('should return 0 and 1 consecutively', () => {
    const [ val1, val2 ] = findByValue(teams, 1)

    expect(val1).toBe(0)
    expect(val2).toBe(1)
  })

  it('should return 1 and 0 consecutively', () => {
    const [ val1, val2 ] = findByValue(teams, 2)

    expect(val1).toBe(1)
    expect(val2).toBe(0)
  })

  it('should return -1 and 0 consecutively when value is not defined', () => {
    const [ val1, val2 ] = findByValue(teams)

    expect(val1).toBe(-1)
    expect(val2).toBe(0)
  })

  it('should return -1 and 0 consecutively when value is null', () => {
    const [ val1, val2 ] = findByValue(teams, null)

    expect(val1).toBe(-1)
    expect(val2).toBe(0)
  })

  it('should return -1 and 0 consecutively when value is other type', () => {
    const [ val1, val2 ] = findByValue(teams, 'string')

    expect(val1).toBe(-1)
    expect(val2).toBe(0)
  })
})
