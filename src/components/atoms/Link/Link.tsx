import { AnchorHTMLAttributes } from 'react'

import * as S from './styles'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode
}

export const Link = ({ children, ...rest }: LinkProps) => (
  <S.Container {...rest} target="_blank" rel="noopener noreferrer">
    <S.Content>{children}</S.Content>
  </S.Container>
)
