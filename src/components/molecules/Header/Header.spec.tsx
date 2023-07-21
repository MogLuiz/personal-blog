import { render, screen } from '@testing-library/react'

import { Header } from '.'
import { headerItemsMock } from './mock'

const factorySetupTest = () => {
  render(<Header />)

  const navigationItem1 = screen.getByText(RegExp(headerItemsMock[0].title))
  const navigationItem2 = screen.getByText(RegExp(headerItemsMock[1].title))
  const navigationItem3 = screen.getByText(RegExp(headerItemsMock[2].title))

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

    expect(navigationItem1).toHaveAttribute('href', headerItemsMock[0].href)
    expect(navigationItem2).toHaveAttribute('href', headerItemsMock[1].href)
    expect(navigationItem3).toHaveAttribute('href', headerItemsMock[2].href)
  })
})
