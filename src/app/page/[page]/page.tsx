import { Metadata } from 'next'

import { siteConfig } from '@/config'
import { HomeScreen } from '@/screens/Home'
import { getAllPosts, useListPosts } from '@/services/PostService'

type PaginatedHomeDataLayerProps = {
  params: {
    page: string
  }
}

export default function PaginatedHomeDataLayer({
  params
}: PaginatedHomeDataLayerProps) {
  const currentPage = Number(params.page)

  const data = useListPosts({ currentPage })

  if (!data.posts.length) {
    return (
      <div>
        <h2>Não há posts</h2>
      </div>
    )
  }

  return <HomeScreen {...data} withProfileSection={false} />
}

export function generateMetadata({
  params
}: PaginatedHomeDataLayerProps): Metadata {
  const currentPage = Number(params.page)
  const { posts } = getAllPosts({ currentPage })

  if (!posts.length) {
    return {
      title: 'Não há posts'
    }
  }

  return {
    title: `Página ${currentPage}`,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}/${params.page}`,
      title: 'Página ' + currentPage,
      description: 'Página ' + currentPage,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${posts[0].image}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: posts[0].title,
      description: posts[0].description,
      images: [`${siteConfig.url}${posts[0].image}`]
    }
  }
}
