import { dataPagination } from './pagination'

const data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Doe' },
  { id: 3, name: 'Jane' },
  { id: 4, name: 'Jack' },
  { id: 5, name: 'Jill' }
]

describe('dataPagination - utility function', () => {
  it('should return paginated data', () => {
    const { paginatedData, totalPages } = dataPagination(data, 1, 2)

    expect(paginatedData).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' }
    ])
    expect(totalPages).toBe(3)

    const { paginatedData: paginatedData2, totalPages: totalPages2 } =
      dataPagination(data, 2, 2)

    expect(paginatedData2).toEqual([
      { id: 3, name: 'Jane' },
      { id: 4, name: 'Jack' }
    ])
    expect(totalPages2).toBe(3)

    const { paginatedData: paginatedData3, totalPages: totalPages3 } =
      dataPagination(data, 3, 2)

    expect(paginatedData3).toEqual([{ id: 5, name: 'Jill' }])
    expect(totalPages3).toBe(3)
  })

  it('should return paginated data with default values', () => {
    const { paginatedData, totalPages } = dataPagination(data)

    expect(paginatedData).toEqual(data)
    expect(totalPages).toBe(1)
  })
})
