import { siteConfig, socialLinkConfig } from '@/config'
import { render, screen } from '@testing-library/react'

import { mainNavItemsMock } from '@/models/@mocks/mainNav'

import { Footer } from '.'

const factorySetupTest = () => {
  render(<Footer items={mainNavItemsMock} />)

  const navigationItem1 = screen.getByText(RegExp(mainNavItemsMock[0].title))
  const navigationItem2 = screen.getByText(RegExp(mainNavItemsMock[1].title))
  const navigationItem3 = screen.getByText(RegExp(mainNavItemsMock[2].title))
  const title = screen.getByText(siteConfig.title)
  const logo = screen.getByLabelText(/logo/i)
  const socialMediaSection = screen.getByText(/redes/i)
  const sitemapSection = screen.getByText(/sitemap/i)
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
    title,
    logo,
    socialMediaSection,
    sitemapSection,
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
      youtubeSocialLink,
      sitemapSection,
      socialMediaSection,
      title,
      logo
    } = factorySetupTest()

    expect(logo).toBeVisible()
    expect(navigationItem1).toBeVisible()
    expect(navigationItem2).toBeVisible()
    expect(navigationItem3).toBeVisible()
    expect(title).toBeVisible()
    expect(socialMediaSection).toBeVisible()
    expect(sitemapSection).toBeVisible()
    expect(githubSocialLink).toBeVisible()
    expect(linkedinSocialLink).toBeVisible()
    expect(twitterSocialLink).toBeVisible()
    expect(youtubeSocialLink).toBeVisible()
  })

  it('should be able to render the footer with the correct links', () => {
    const { navigationItem1, navigationItem2, navigationItem3 } =
      factorySetupTest()

    expect(navigationItem1).toHaveAttribute('href', mainNavItemsMock[0].href)
    expect(navigationItem2).toHaveAttribute('href', mainNavItemsMock[1].href)
    expect(navigationItem3).toHaveAttribute('href', mainNavItemsMock[2].href)
  })
})
