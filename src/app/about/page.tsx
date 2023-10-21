import { siteConfig } from '@/config'
import { AboutUILayer } from '@/screens/About'

export default function AboutDataLayer() {
  return <AboutUILayer />
}

export const metadata = {
  title: 'Sobre mim',
  description: 'Sobre mim',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    title: 'Sobre mim',
    url: '/about',
    description: 'Sobre mim',
    siteName: 'Sobre mim',
    images: [
      {
        url: `${siteConfig.url}/assets/images/image-post.jpeg`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre mim',
    description: 'Sobre mim',
    images: [`${siteConfig.url}/assets/images/image-post.jpeg`]
  }
}
