import { render, screen } from '@testing-library/react'

import { Layout } from '.'

describe('Components > Atoms - Layout', () => {
  it('should be able to render the layout with the correct children', () => {
    render(<Layout>Layout</Layout>)

    expect(screen.getByText(/layout/i)).toHaveTextContent('Layout')
  })
})
