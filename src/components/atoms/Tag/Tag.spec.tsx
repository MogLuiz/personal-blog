import { render, screen } from '@testing-library/react'

import { Tag } from '.'

describe('Components > Atoms - Tag', () => {
  it('should be able to render the tag correctly', () => {
    render(<Tag>Tag</Tag>)

    expect(screen.getByText(/tag/i)).toBeVisible()
  })
})
