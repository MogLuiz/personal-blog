import { render, screen } from '@testing-library/react'

import { Tag, TagProps } from './Tag'

const factorySetupTest = (props?: Pick<TagProps, 'size'>) => {
  render(<Tag {...props}>Tag</Tag>)

  const tagChildren = screen.getByText(/tag/i)

  return {
    tagChildren
  }
}

describe('Components > Atoms - Tag', () => {
  it('should be able to render the tag correctly', () => {
    const { tagChildren } = factorySetupTest()

    expect(tagChildren).toBeVisible()
  })

  it('should be able to render the tag with the correct size', () => {
    const { tagChildren } = factorySetupTest({ size: 'xs' })

    expect(tagChildren).toHaveClass('text-xs')
  })
})
