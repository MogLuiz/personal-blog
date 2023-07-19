import { render, screen } from '@testing-library/react'

import { Header } from '.'

const headerItemsMock = [
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

describe('Components > Molecules - Header', () => {
  it('should be able to render the header correctly', () => {
    render(<Header items={headerItemsMock} />)

    expect(screen.getByLabelText(/logo/i)).toBeVisible()
    expect(screen.getByText(RegExp(headerItemsMock[0].title))).toBeVisible()
    expect(screen.getByText(RegExp(headerItemsMock[1].title))).toBeVisible()
    expect(screen.getByText(RegExp(headerItemsMock[2].title))).toBeVisible()
  })
})
