'use client'

import * as S from './styles'

export const BackToTop = () => {
  return (
    <S.Container>
      <S.Button
        title="Voltar ao topo"
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo(0, 0)}
      >
        <S.Icon />
      </S.Button>
    </S.Container>
  )
}
