import { render, screen } from '@testing-library/react'

import { Profile } from '.'

const factorySetupTest = () => {
  render(<Profile title="John Doe" subtitle="Software Engineer" />)

  const profileImage = screen.getByRole('img')
  const profileTitle = screen.getByText(/john doe/i)
  const profileSubtitle = screen.getByText(/software engineer/i)

  return { profileSubtitle, profileTitle, profileImage }
}

describe('Components > Atoms - Profile', () => {
  it('should be able to render the profile correctly', () => {
    const { profileSubtitle, profileTitle } = factorySetupTest()

    expect(profileTitle).toBeVisible()
    expect(profileSubtitle).toBeVisible()
  })

  it('should be able to render the profile image correctly', () => {
    const { profileImage } = factorySetupTest()

    expect(profileImage).toBeVisible()
    expect(profileImage).toHaveAttribute('alt', 'Profile image')
    expect(profileImage).toHaveAttribute('title', 'Profile image')
  })
})
