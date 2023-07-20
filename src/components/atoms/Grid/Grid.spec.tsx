import { render, screen } from '@testing-library/react'

import { Grid } from '.'

describe('Components > Atoms - Grid', () => {
  it('should be able to render the grid correctly', () => {
    render(<Grid>Grid</Grid>)

    expect(screen.getByText(/grid/i)).toBeVisible()
  })

  it('should be able to render the grid with the correct number of columns', () => {
    render(<Grid cols={3}>Grid</Grid>)

    expect(screen.getByText(/grid/i)).toHaveClass('grid-cols-3')
  })
})
