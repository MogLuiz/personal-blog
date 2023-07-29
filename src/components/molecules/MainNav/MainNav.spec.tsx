import { render, screen } from '@testing-library/react'

import { mainNavItemsMock } from '@/models/@mocks/mainNav'

import { MainNav } from '.'

describe('Components > Molecules - MainNav', () => {
  it('should be able to render the main nav correctly', () => {
    render(<MainNav items={mainNavItemsMock} />)

    const navigationItem1 = screen.getByText(RegExp(mainNavItemsMock[0].title))
    const navigationItem2 = screen.getByText(RegExp(mainNavItemsMock[1].title))
    const navigationItem3 = screen.getByText(RegExp(mainNavItemsMock[2].title))

    expect(navigationItem1).toBeVisible()
    expect(navigationItem2).toBeVisible()
    expect(navigationItem3).toBeVisible()

    expect(navigationItem1).toHaveAttribute('href', mainNavItemsMock[0].href)
    expect(navigationItem2).toHaveAttribute('href', mainNavItemsMock[1].href)
    expect(navigationItem3).toHaveAttribute('href', mainNavItemsMock[2].href)
  })
})
