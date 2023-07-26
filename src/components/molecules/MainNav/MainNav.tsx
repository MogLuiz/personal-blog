'use client'

import Link from 'next/link'

import { List, ListItem } from '@/components/atoms/List'
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
        <List>
          {items.map(({ href, title }) => (
            <ListItem key={title}>
              <Link href={href}>{title}</Link>
            </ListItem>
          ))}
        </List>
      </S.Nav>

      <S.ContainerToggleMobile>
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </S.ContainerToggleMobile>

      {isOpenMenu && (
        <S.ContainerNavMobile>
          <S.NavMobile>
            <S.ListMobile>
              {items.map(({ href, title }) => (
                <S.ListItemMobile key={title}>
                  <Link href={href}>{title}</Link>
                </S.ListItemMobile>
              ))}
            </S.ListMobile>
          </S.NavMobile>
        </S.ContainerNavMobile>
      )}
    </>
  )
}
