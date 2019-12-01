import { computeValue } from './'

describe('value.js', () => {
  it('should return default value', () => {
    const value = computeValue(true)

    expect(value).toBe(1)
  })

  it('should return value 2', () => {
    const value = computeValue(true, 2)

    expect(value).toBe(2)
  })

  it('should return `else` value', () => {
    const value = computeValue(false)
    const valueNull = computeValue(null)
    const valueUndefined = computeValue(undefined)
    const valueParameterless = computeValue()

    expect(value).toBe(0)
    expect(valueNull).toBe(0)
    expect(valueUndefined).toBe(0)
    expect(valueParameterless).toBe(0)
  })
})
