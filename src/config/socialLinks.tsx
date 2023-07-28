import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon
} from '@/components/atoms/Icons'

import { MainNav } from '@/models'

export const socialLinkConfig: MainNav = {
  mainNav: [
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/luiz-henrique-9a41091b0/',
      icon: <LinkedinIcon size={28} data-testid="Linkedin-icon" />
    },
    {
      title: 'Youtube',
      href: 'https://www.youtube.com/channel/UC5sWX3akp_nnzNYaN4p7k7g',
      icon: <YoutubeIcon size={28} data-testid="Youtube-icon" />
    },
    {
      title: 'Github',
      href: 'https://www.github.com/MogLuiz/',
      icon: <GithubIcon size={28} data-testid="Github-icon" />
    },
    {
      title: 'Twitter',
      href: 'https://www.twitter.com/luizhjramos/',
      icon: <TwitterIcon size={28} data-testid="Twitter-icon" />
    }
  ]
}
