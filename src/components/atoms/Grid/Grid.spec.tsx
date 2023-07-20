import { render, screen } from '@testing-library/react'

import { Grid, GridProps } from './Grid'

type ExcludeProperty<T, K extends keyof T> = Omit<T, K>

const factorySetupTest = (props?: ExcludeProperty<GridProps, 'children'>) => {
  render(<Grid {...props}>Grid</Grid>)
  const gridChildren = screen.getByText(/grid/i)

  return {
    gridChildren
  }
}

describe('Components > Atoms - Grid', () => {
  it('should be able to render the grid correctly', () => {
    const { gridChildren } = factorySetupTest()
    expect(gridChildren).toBeVisible()
  })

  it('should be able to render the grid with the correct number of columns', () => {
    const { gridChildren } = factorySetupTest({ cols: 3 })
    expect(gridChildren).toHaveClass('grid-cols-3')
  })

  it('should be able to render the grid with the correct number of columns on small screens', () => {
    const { gridChildren } = factorySetupTest({ sm: 3 })
    expect(gridChildren).toHaveClass('sm:grid-cols-3')
  })

  it('should be able to render the grid with the correct number of columns on medium screens', () => {
    const { gridChildren } = factorySetupTest({ md: 3 })
    expect(gridChildren).toHaveClass('md:grid-cols-3')
  })

  it('should be able to render the grid with the correct number of columns on large screens', () => {
    const { gridChildren } = factorySetupTest({ lg: 3 })
    expect(gridChildren).toHaveClass('lg:grid-cols-3')
  })

  it('should be able to render the grid with the correct number of columns on extra large screens', () => {
    const { gridChildren } = factorySetupTest({ xl: 3 })
    expect(gridChildren).toHaveClass('xl:grid-cols-3')
  })

  it('should be able to render the grid with the correct number of columns on extra extra large screens', () => {
    const { gridChildren } = factorySetupTest({ xxl: 3 })
    expect(gridChildren).toHaveClass('2xl:grid-cols-3')
  })

  it('should be able to render the grid with the correct gap', () => {
    const { gridChildren } = factorySetupTest({ gap: 3 })
    expect(gridChildren).toHaveClass('gap-3')
  })
})
