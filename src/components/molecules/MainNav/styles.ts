import tw from 'tailwind-styled-components'

import * as ListItemContainer from '@/components/atoms/List/components/styles'
import * as ListContainer from '@/components/atoms/List/styles'

export const Nav = tw.nav`
items-center
justify-between
hidden

lg:flex
`

export const ContainerToggleMobile = tw.div`
  z-50
  flex
  transition-colors
  duration-300
  ease-in-out
  hover:text-link
  lg:hidden
`

export const ContainerNavMobile = tw.div`
  fixed
  left-0
  top-0
  z-30
  min-h-screen
  w-full
  overflow-hidden
  bg-primary/80
  pt-[4rem]
  lg:hidden
`

export const NavMobile = tw.nav`
  mx-auto
  flex
  max-w-[80%]
  items-center
  justify-center
  rounded-2xl
  border
  border-gray-600
  bg-secundary
  py-3
  shadow-2xl
`
export const ListMobile = tw(ListContainer.Container)`
  w-full
  flex-col
  px-4
`

export const ListItemMobile = tw(ListItemContainer.Container)`
  border-b
  border-gray-600
  py-3
`
