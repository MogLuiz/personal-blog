import { Metadata } from 'next'

import { siteConfig } from '@/config'
import { HomeScreen } from '@/screens/Home'
import { useListPosts } from '@/services/PostService'

export default function HomeDataLayer() {
  const data = useListPosts()

  return <HomeScreen {...data} />
}

export const metadata: Metadata = {
  title: 'Home | Luiz Ramos',
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: 'Home | Luiz Ramos',
    description: siteConfig.description,
    url: new URL(siteConfig.url),
    type: 'website',
    images: [
      {
        url: '/images/cover.png',
        alt: 'Blog image'
      }
    ]
  }
}
