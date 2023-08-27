import { render, screen } from '@testing-library/react'

import { Link } from '.'

describe('Components > Atoms - Link', () => {
  it('should be able to render the link', () => {
    render(<Link href="#">Link</Link>)

    expect(screen.getByText(/link/i)).toBeVisible()
  })

  it('should be able to render the link with the correct href', () => {
    const linkTo = '/about'
    render(<Link href={linkTo}>Link</Link>)

    expect(screen.getByRole('link', { name: /link/i })).toHaveAttribute(
      'href',
      linkTo
    )
  })
})
