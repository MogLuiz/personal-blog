import Link from 'next/link'

import { NavItem } from '@/types'

import { Logo } from '@/components/atoms/Logo'

import * as S from './styles'

type HeaderProps = {
  items: NavItem[]
}

export const Header = ({ items = [] }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <S.Nav>
          <S.List>
            {items.map(({ href, title }) => (
              <S.ListItem key={title}>
                <Link href={href}>{title}</Link>
              </S.ListItem>
            ))}
          </S.List>
        </S.Nav>
      </S.Content>
    </S.Container>
  )
}
