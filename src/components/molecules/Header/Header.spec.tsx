import { render, screen } from '@testing-library/react'

import { mainNavItemsMock } from '@/models/@mocks/mainNav'

import { Header } from '.'

const factorySetupTest = () => {
  render(<Header />)

  const navigationItem1 = screen.getByText(RegExp(mainNavItemsMock[0].title))
  const navigationItem2 = screen.getByText(RegExp(mainNavItemsMock[1].title))
  const navigationItem3 = screen.getByText(RegExp(mainNavItemsMock[2].title))

  return {
    navigationItem1,
    navigationItem2,
    navigationItem3
  }
}

describe('Components > Molecules - Header', () => {
  it('should be able to render the header correctly', () => {
    const { navigationItem1, navigationItem2, navigationItem3 } =
      factorySetupTest()

    expect(screen.getByLabelText(/logo/i)).toBeVisible()
    expect(navigationItem1).toBeVisible()
    expect(navigationItem2).toBeVisible()
    expect(navigationItem3).toBeVisible()
  })

  it('should be able to render the header with the correct links', () => {
    const { navigationItem1, navigationItem2, navigationItem3 } =
      factorySetupTest()

    expect(navigationItem1).toHaveAttribute('href', mainNavItemsMock[0].href)
    expect(navigationItem2).toHaveAttribute('href', mainNavItemsMock[1].href)
    expect(navigationItem3).toHaveAttribute('href', mainNavItemsMock[2].href)
  })
})
