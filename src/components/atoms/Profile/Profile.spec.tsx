import { render, screen } from '@testing-library/react'

import { Profile } from '.'

describe('Components > Atoms - Profile', () => {
  it('should be able to render the profile correctly', () => {
    render(<Profile title="John Doe" subtitle="Software Engineer" />)

    const profileTitle = screen.getByText(/john doe/i)
    const profileSubtitle = screen.getByText(/software engineer/i)

    expect(profileTitle).toBeVisible()
    expect(profileSubtitle).toBeVisible()
  })

  it('should be able to render the profile image correctly', () => {
    render(<Profile title="John Doe" subtitle="Software Engineer" />)

    const profileImage = screen.getByRole('img')

    expect(profileImage).toBeVisible()
    expect(profileImage).toHaveAttribute('alt', 'Profile image')
    expect(profileImage).toHaveAttribute('title', 'Profile image')
  })
})
