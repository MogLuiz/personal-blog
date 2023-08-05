import * as S from './styles'

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
  <S.Container>
    <S.Link href={previousPage}>
      <S.PrevPageIcon />
      Página anterior
    </S.Link>

    <S.PageDisplay>
      {currentPage} de {totalPages}
    </S.PageDisplay>

    <S.Link href={nextPage}>
      Próxima página
      <S.NextPageIcon />
    </S.Link>
  </S.Container>
)
