import { LiHTMLAttributes } from 'react'

import * as S from './styles'

type ListItemProps = LiHTMLAttributes<HTMLLIElement> & {
  children: React.ReactNode
}

export const ListItem = ({ children, ...rest }: ListItemProps) => (
  <S.Container {...rest}>{children}</S.Container>
)
