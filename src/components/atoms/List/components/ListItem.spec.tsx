import { render, screen } from '@testing-library/react'

import { ListItem } from './ListItem'

describe('Components > Atoms - ListItem', () => {
  it('should be able to render the ListItem correctly', () => {
    const { container } = render(<ListItem>item</ListItem>)
    const listChildren = screen.getByText(/item/i)

    expect(listChildren).toBeVisible()
    expect(container.firstChild).toMatchSnapshot()
  })
})
