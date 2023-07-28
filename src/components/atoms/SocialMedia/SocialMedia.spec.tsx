import { socialLinkConfig } from '@/config'
import { render, screen } from '@testing-library/react'

import { SocialMedia } from '.'

describe('Components > Atoms - SocialMedia', () => {
  it('should be able to render the social media', () => {
    render(<SocialMedia items={socialLinkConfig.mainNav} />)

    expect(screen.getByText(socialLinkConfig.mainNav[0].title)).toBeVisible()
    expect(screen.getByText(socialLinkConfig.mainNav[1].title)).toBeVisible()
    expect(screen.getByText(socialLinkConfig.mainNav[2].title)).toBeVisible()
    expect(screen.getByText(socialLinkConfig.mainNav[3].title)).toBeVisible()

    expect(
      screen.getByTestId(`${socialLinkConfig.mainNav[0].title}-icon`)
    ).toBeVisible()
    expect(
      screen.getByTestId(`${socialLinkConfig.mainNav[1].title}-icon`)
    ).toBeVisible()
    expect(
      screen.getByTestId(`${socialLinkConfig.mainNav[2].title}-icon`)
    ).toBeVisible()
    expect(
      screen.getByTestId(`${socialLinkConfig.mainNav[3].title}-icon`)
    ).toBeVisible()
  })
})
