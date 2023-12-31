type DataPaginationFn<T> = {
  paginatedData: T[]
  totalPages: number
}

export const dataPagination = <T>(
  data: T[],
  currentPage = 1,
  limit = 10
): DataPaginationFn<T> => {
  const totalPages = Math.ceil(data.length / limit)
  const paginatedData = data.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  )
  return {
    paginatedData,
    totalPages
  }
}
