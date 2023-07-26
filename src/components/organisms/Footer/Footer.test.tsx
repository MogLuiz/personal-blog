import { socialLinkConfig } from '@/config/socialLinks'
import { render, screen } from '@testing-library/react'

import { mainNavItemsMock } from '@/models/@mocks/mainNav'

import { Footer } from '.'

const factorySetupTest = () => {
  render(<Footer items={mainNavItemsMock} />)

  const navigationItem1 = screen.getByText(RegExp(mainNavItemsMock[0].title))
  const navigationItem2 = screen.getByText(RegExp(mainNavItemsMock[1].title))
  const navigationItem3 = screen.getByText(RegExp(mainNavItemsMock[2].title))
  const linkedinSocialLink = screen.getByText(
    RegExp(socialLinkConfig.mainNav[0].title)
  )
  const youtubeSocialLink = screen.getByText(
    RegExp(socialLinkConfig.mainNav[1].title)
  )
  const githubSocialLink = screen.getByText(
    RegExp(socialLinkConfig.mainNav[2].title)
  )
  const twitterSocialLink = screen.getByText(
    RegExp(socialLinkConfig.mainNav[3].title)
  )

  return {
    navigationItem1,
    navigationItem2,
    navigationItem3,
    linkedinSocialLink,
    youtubeSocialLink,
    githubSocialLink,
    twitterSocialLink
  }
}

describe('Components > Organisms - Footer', () => {
  it('should be able to render the footer correctly', () => {
    const {
      navigationItem1,
      navigationItem2,
      navigationItem3,
      githubSocialLink,
      linkedinSocialLink,
      twitterSocialLink,
      youtubeSocialLink
    } = factorySetupTest()

    expect(screen.getByLabelText(/logo/i)).toBeVisible()
    expect(navigationItem1).toBeVisible()
    expect(navigationItem2).toBeVisible()
    expect(navigationItem3).toBeVisible()
    expect(githubSocialLink).toBeVisible()
    expect(linkedinSocialLink).toBeVisible()
    expect(twitterSocialLink).toBeVisible()
    expect(youtubeSocialLink).toBeVisible()
  })
})
