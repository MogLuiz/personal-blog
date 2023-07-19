import * as S from './styles'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <S.Container>{children}</S.Container>
)
