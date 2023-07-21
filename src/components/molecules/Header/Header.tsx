import { headerConfig } from '@/config'

import { Logo } from '@/components/atoms/Logo'
import { MainNav } from '@/components/atoms/MainNav'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <MainNav items={headerConfig.mainNav} />
      </S.Content>
    </S.Container>
  )
}
