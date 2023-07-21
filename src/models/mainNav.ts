export type NavItem = {
  title: string
  href: string
}

export type MainNav = {
  mainNav: NavItem[]
}

export const mainNavItemsMock = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Artigos',
    href: '/articles'
  },
  {
    title: 'Sobre mim',
    href: '/about'
  }
]
