import { formatDate } from './formatDate'

describe('formatDate - utility function', () => {
  it('should format a date', () => {
    const date = '2023-07-14T11:41:13.000Z'
    const formattedDate = formatDate(date)

    expect(formattedDate).toBe('14 de julho de 2023')
  })
})
