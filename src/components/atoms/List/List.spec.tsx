import { render, screen } from '@testing-library/react'

import { List } from './List'

describe('Components > Atoms - List', () => {
  it('should be able to render the list correctly', () => {
    const { container } = render(<List>List</List>)
    const listChildren = screen.getByText(/list/i)

    expect(listChildren).toBeVisible()
    expect(container.firstChild).toMatchSnapshot()
  })
})
