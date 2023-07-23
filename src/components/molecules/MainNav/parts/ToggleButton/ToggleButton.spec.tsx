import { render, screen } from '@testing-library/react'

import { ToggleButton } from '.'

const handleToggleMenu = jest.fn()

describe('Components > Molecules - ToggleButton', () => {
  it('should render close icon when isOpenMenu is true', () => {
    render(<ToggleButton isOpenMenu handleToggleMenu={handleToggleMenu} />)

    expect(screen.getByTestId('close-icon')).toBeVisible()
  })

  it('should render open icon when isOpenMenu is false', () => {
    render(
      <ToggleButton isOpenMenu={false} handleToggleMenu={handleToggleMenu} />
    )

    expect(screen.getByTestId('open-icon')).toBeVisible()
  })

  it('should call handleToggleMenu when button is clicked', () => {
    render(<ToggleButton isOpenMenu handleToggleMenu={handleToggleMenu} />)

    screen.getByRole('button').click()

    expect(handleToggleMenu).toHaveBeenCalledTimes(1)
  })
})
