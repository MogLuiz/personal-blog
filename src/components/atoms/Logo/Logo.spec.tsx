import { render, screen } from '@testing-library/react'

import { Logo } from '.'

describe('Components > Atoms - Logo', () => {
  it('should be able to render the logo', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/logo/i)).toBeVisible()
  })

  it('should be able to render the logo with the correct size', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/logo/i)).toHaveAttribute('width', '220')
    expect(screen.getByLabelText(/logo/i)).toHaveAttribute('height', '340')
  })
})
