'use client'

import Link from 'next/link'

import { useMainNavigation } from '@/components/molecules/MainNav/hooks'
import { ToggleButton } from '@/components/molecules/MainNav/parts/ToggleButton'

import { NavItem } from '@/models'

import * as S from './styles'

type MainNavProps = {
  items: NavItem[]
}

export const MainNav = ({ items }: MainNavProps) => {
  const { isOpenMenu, handleToggleMenu } = useMainNavigation()

  return (
    <>
      <S.Nav>
        <S.List>
          {items.map(({ href, title }) => (
            <S.ListItem key={title}>
              <Link href={href}>{title}</Link>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>

      <S.Content>
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </S.Content>
    </>
  )
}
