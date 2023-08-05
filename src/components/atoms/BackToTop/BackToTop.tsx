'use client'

import { useBackToTop } from './hooks/useBackToTop'
import * as S from './styles'

export const BackToTop = () => {
  const { showScrollButton, handleBackToTop } = useBackToTop()

  if (!showScrollButton) return null

  return (
    <S.Container>
      <S.Button
        title="Voltar ao topo"
        aria-label="Voltar ao topo"
        onClick={handleBackToTop}
      >
        <S.Icon />
      </S.Button>
    </S.Container>
  )
}
