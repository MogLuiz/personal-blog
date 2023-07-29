import { slugify } from './slugfy'

describe('slugfy - utility functions', () => {
  it('should return a slugified string', () => {
    const text = 'This is a test'
    const expected = 'this-is-a-test'

    expect(slugify(text)).toEqual(expected)
  })
})
