import * as S from './styles'

export type GridProps = {
  children: React.ReactNode
  cols?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
  gap?: number
}

export const Grid = ({
  children,
  sm,
  md,
  lg,
  xl,
  xxl,
  cols = 1,
  gap = 8
}: GridProps) => {
  return (
    <S.Container
      cols={cols}
      gap={gap}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
    >
      {children}
    </S.Container>
  )
}
