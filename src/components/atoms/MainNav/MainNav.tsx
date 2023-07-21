import Link from 'next/link'

import { NavItem } from '@/types'

import * as S from './styles'

type MainNavProps = {
  items: NavItem[]
}

export const MainNav = ({ items }: MainNavProps) => {
  return (
    <S.Nav>
      <S.List>
        {items.map(({ href, title }) => (
          <S.ListItem key={title}>
            <Link href={href}>{title}</Link>
          </S.ListItem>
        ))}
      </S.List>
    </S.Nav>
  )
}
