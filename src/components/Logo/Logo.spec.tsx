import { render, screen } from '@testing-library/react'

import { Logo } from '.'

describe('Component - Logo', () => {
  it('should be able to render the logo', () => {
    render(<Logo />)

    expect(screen.getByLabelText(/logo do projet/i)).toBeInTheDocument()
  })
})
