import { render, screen } from '@testing-library/react'

import { Link } from '.'

describe('Components > Atoms - Link', () => {
  it('should be able to render the link', () => {
    render(<Link href="#">Link</Link>)

    expect(screen.getByText(/link/i)).toBeVisible()
  })
})
