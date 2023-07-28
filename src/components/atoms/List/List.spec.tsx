import { render, screen } from '@testing-library/react'

import { List } from './List'

describe('Components > Atoms - List', () => {
  it('should be able to render the list correctly', () => {
    render(<List>List</List>)
    const listChildren = screen.getByText(/list/i)

    expect(listChildren).toBeVisible()
  })
})
