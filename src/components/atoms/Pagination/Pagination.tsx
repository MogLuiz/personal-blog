import Link from 'next/link'

type PaginationProps = {
  currentPage: number
  totalPages: number
  previousPage: string
  nextPage: string
}

export const Pagination = ({
  currentPage,
  nextPage,
  previousPage,
  totalPages
}: PaginationProps) => (
  <div>
    <div>
      <Link href="#">Página anterior</Link>
    </div>

    <p>
      {currentPage} de {totalPages}
    </p>

    <div>
      <Link href="#">Próxima página</Link>
    </div>
  </div>
)
